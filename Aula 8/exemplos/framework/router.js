/**
 * ============================================================
 *  ROUTER  (Spring concept: DispatcherServlet / HandlerMapping)
 * ============================================================
 *
 * In Spring MVC the DispatcherServlet acts as the "Front Controller":
 *   1. Every HTTP request arrives at the DispatcherServlet first.
 *   2. It consults HandlerMapping to find the right controller method.
 *   3. It delegates to HandlerAdapter which actually calls the method.
 *   4. The result is passed to ViewResolver (or returned as JSON).
 *
 * Our Router plays that same role:
 *   - register()  → HandlerMapping: maps a route to a controller method
 *   - dispatch()  → DispatcherServlet: receives request, finds handler, calls it
 *
 * The Express app is wired to send EVERY request to dispatch(),
 * mirroring how DispatcherServlet is mapped to "/*" in web.xml.
 * ============================================================
 */

class Router {
  constructor() {
    /**
     * routes  → the route table (HandlerMapping registry)
     *
     * Each entry: { method, path, controllerInstance, handlerName }
     */
    this.routes = [];
  }

  /**
   * register(method, path, controllerInstance, handlerName)
   * --------------------------------------------------------
   * Adds a route to the routing table.
   *
   * Spring equivalent:
   *   @GetMapping("/users")  on  UserController.list()
   *
   * Called automatically by ApplicationContext when it scans controllers.
   */
  register(method, path, controllerInstance, handlerName) {
    this.routes.push({
      method: method.toUpperCase(),
      path,
      controllerInstance,
      handlerName,
    });

    console.log(`[Router]     Mapped:    ${method.toUpperCase()} ${path} → ${controllerInstance.constructor.name}.${handlerName}()`);
  }

  /**
   * matchRoute(registeredPath, requestPath)
   * ----------------------------------------
   * Checks whether an incoming URL matches a route pattern that may
   * contain path parameters (e.g. /users/:id).
   *
   * Returns an object { matched: boolean, params: {} } where params
   * holds extracted path-variable values — equivalent to Spring's
   * @PathVariable extraction performed by AntPathMatcher.
   *
   * @param {string} registeredPath - Route pattern, e.g. "/users/:id"
   * @param {string} requestPath    - Actual URL path, e.g. "/users/42"
   */
  matchRoute(registeredPath, requestPath) {
    const patternParts = registeredPath.split('/');
    const requestParts = requestPath.split('/');

    if (patternParts.length !== requestParts.length) {
      return { matched: false, params: {} };
    }

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        // This segment is a path variable — capture its value
        // Spring equivalent: @PathVariable annotation extraction
        const paramName = patternParts[i].slice(1); // strip ":"
        params[paramName] = requestParts[i];
      } else if (patternParts[i] !== requestParts[i]) {
        return { matched: false, params: {} };
      }
    }

    return { matched: true, params };
  }

  /**
   * dispatch(req, res)
   * ------------------
   * The FRONT CONTROLLER entry point.  Receives every incoming HTTP
   * request and delegates it to the correct controller method.
   *
   * Spring equivalent: DispatcherServlet.doDispatch()
   *
   * Steps (mirrors Spring's dispatch pipeline):
   *   1. Find matching route  (HandlerMapping.getHandler)
   *   2. Extract path params  (@PathVariable binding)
   *   3. Call handler method  (HandlerAdapter.handle)
   *   4. Send JSON response   (HttpMessageConverter / @ResponseBody)
   *   5. Return 404 if no route found
   */
  dispatch(req, res) {
    // Step 1 — HandlerMapping: look up a matching route (supports path params)
    let matchedParams = {};
    const route = this.routes.find((r) => {
      if (r.method !== req.method) return false;
      const { matched, params } = this.matchRoute(r.path, req.path);
      if (matched) {
        matchedParams = params;
        return true;
      }
      return false;
    });

    if (!route) {
      // No handler found — equivalent to Spring's NoHandlerFoundException
      return res.status(404).json({
        error: 'No handler found',
        method: req.method,
        path: req.path,
      });
    }

    // Step 2 — Path variable binding (Spring: @PathVariable extraction)
    // Attach extracted params to req.params so controllers can access them
    req.params = { ...req.params, ...matchedParams };

    try {
      // Step 3 — HandlerAdapter: invoke the controller method
      const handler = route.controllerInstance[route.handlerName].bind(
        route.controllerInstance
      );

      // Step 4 — Execute and send response (like @ResponseBody + JSON converter)
      const result = handler(req, res);

      // If the handler returned a value (and didn't already send a response),
      // automatically serialize it as JSON — equivalent to @RestController behaviour.
      if (result !== undefined && !res.headersSent) {
        res.json(result);
      }
    } catch (err) {
      // Centralised error handling — equivalent to @ExceptionHandler / @ControllerAdvice
      console.error('[Router] Handler error:', err.message);
      res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
  }
}

module.exports = new Router(); // Single shared instance — like Spring's singleton DispatcherServlet
