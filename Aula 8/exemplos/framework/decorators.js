/**
 * ============================================================
 *  DECORATORS  (Spring concept: Stereotype Annotations)
 * ============================================================
 *
 * In Spring, annotations like @Controller, @Service, @Repository
 * and @Component are "stereotype" markers.  They tell the IoC
 * container what role a class plays and which dependencies it needs.
 *
 * JavaScript (without TypeScript) doesn't have annotations, so we
 * simulate them with simple helper functions that attach metadata
 * directly to the class constructor — the same information the
 * container reads when resolving beans.
 *
 * Spring equivalent table:
 * ┌─────────────────────────────┬──────────────────────────────┐
 * │  Our decorator              │  Spring annotation           │
 * ├─────────────────────────────┼──────────────────────────────┤
 * │  Injectable(deps)(Class)    │  @Component / @Autowired     │
 * │  Controller(routes)(Class)  │  @Controller / @GetMapping   │
 * │  Service(Class)             │  @Service                    │
 * │  Repository(Class)          │  @Repository                 │
 * └─────────────────────────────┴──────────────────────────────┘
 * ============================================================
 */

/**
 * Injectable(dependencies)
 * ------------------------
 * Marks a class as a managed component and declares which other
 * components it needs injected into its constructor.
 *
 * Spring equivalent: @Component + @Autowired on constructor params
 *
 * Usage:
 *   Injectable(['userRepository'])(UserService)
 *
 * @param {string[]} dependencies - Array of dependency names (lowercase class names)
 * @returns {Function} A decorator function that attaches metadata to the class
 */
function Injectable(dependencies = []) {
  return function (ClassRef) {
    // Store dependency names as lowercase so the container can look them up
    ClassRef.dependencies = dependencies.map((d) => d.toLowerCase());
    ClassRef.injectable = true; // flag: this class is container-managed
    return ClassRef;
  };
}

/**
 * Controller(routes)
 * ------------------
 * Marks a class as an HTTP controller and attaches route definitions.
 *
 * Spring equivalent: @Controller / @RestController + @GetMapping / @PostMapping
 *
 * Usage:
 *   Controller([
 *     { method: 'GET', path: '/users', handler: 'list' }
 *   ])(UserController)
 *
 * @param {Array<{method: string, path: string, handler: string}>} routes
 * @returns {Function} Decorator function
 */
function Controller(routes = []) {
  return function (ClassRef) {
    ClassRef.isController = true;

    /**
     * routes array — equivalent to the @RequestMapping metadata Spring
     * stores for each handler method.
     *
     * Each entry: { method: 'GET', path: '/users', handler: 'list' }
     *   method  → HTTP verb  (@GetMapping, @PostMapping, …)
     *   path    → URL path   (@RequestMapping("/users"))
     *   handler → method name on the controller class
     */
    ClassRef.routes = routes;

    return ClassRef;
  };
}

/**
 * Service(ClassRef)
 * -----------------
 * Marks a class as a Service-layer component (business logic).
 *
 * Spring equivalent: @Service
 *
 * In Spring, @Service is a specialisation of @Component with no extra
 * behaviour — it simply communicates intent.  We do the same here.
 */
function Service(ClassRef) {
  ClassRef.stereotype = 'service';
  return ClassRef;
}

/**
 * Repository(ClassRef)
 * --------------------
 * Marks a class as a Repository-layer component (data access).
 *
 * Spring equivalent: @Repository
 *
 * In Spring, @Repository also enables exception translation.
 * Here it's a pure metadata marker to communicate intent.
 */
function Repository(ClassRef) {
  ClassRef.stereotype = 'repository';
  return ClassRef;
}

module.exports = { Injectable, Controller, Service, Repository };
