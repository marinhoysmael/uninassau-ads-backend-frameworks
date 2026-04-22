/**
 * ============================================================
 *  APPLICATION CONTEXT  (Spring concept: ApplicationContext)
 * ============================================================
 *
 * In Spring, ApplicationContext is the central interface to the
 * IoC container.  On startup it:
 *   1. Scans the classpath for @Component / @Controller / @Service / @Repository
 *   2. Instantiates beans and injects dependencies
 *   3. Registers handler mappings (URL → controller method)
 *   4. Makes everything ready before the first HTTP request arrives
 *
 * Our ApplicationContext does the same in three steps:
 *   1. Accept a list of component classes (the "component scan" result)
 *   2. Register every class in the IoC Container
 *   3. Walk through @Controller classes, resolve them, and register
 *      their routes with the Router (HandlerMapping bootstrap)
 * ============================================================
 */

const container = require('./container');
const router    = require('./router');

class ApplicationContext {
  /**
   * bootstrap(components)
   * ---------------------
   * Initialises the entire application:
   *   - Registers components in the IoC Container  (bean definition phase)
   *   - Resolves all beans                          (instantiation + DI phase)
   *   - Wires controller routes into the Router     (HandlerMapping phase)
   *
   * Spring equivalent:
   *   new AnnotationConfigApplicationContext(AppConfig.class)
   *   or the implicit startup triggered by SpringApplication.run()
   *
   * @param {Function[]} components - Array of class constructors to manage
   * @returns {object} router - The configured router (DispatcherServlet)
   */
  bootstrap(components) {
    console.log('\n========================================');
    console.log('  Spring-Inspired Framework — Startup');
    console.log('========================================\n');

    // ── Phase 1: Bean Definition Registration ──────────────────────────
    // Equivalent to Spring's @ComponentScan parsing phase.
    // We register every class so the container knows about it.
    console.log('[Context]  Phase 1 — Registering components...');
    components.forEach((ClassRef) => container.register(ClassRef));

    // ── Phase 2: Bean Instantiation & Dependency Injection ─────────────
    // Equivalent to Spring's bean factory post-processing and
    // singleton pre-instantiation (ApplicationContext.refresh()).
    console.log('\n[Context]  Phase 2 — Instantiating beans & injecting dependencies...');
    container.getAll();

    // ── Phase 3: Handler Mapping (Route Registration) ──────────────────
    // Walk every registered class and check if it is a @Controller.
    // For each controller, read its route metadata and register the
    // routes in the Router (our DispatcherServlet / HandlerMapping).
    console.log('\n[Context]  Phase 3 — Registering route mappings...');
    components.forEach((ClassRef) => {
      if (ClassRef.isController && ClassRef.routes) {
        // Retrieve the already-instantiated (and dependency-injected) controller
        const controllerInstance = container.resolve(ClassRef.name);

        ClassRef.routes.forEach(({ method, path, handler }) => {
          router.register(method, path, controllerInstance, handler);
        });
      }
    });

    console.log('\n[Context]  Application context loaded successfully.\n');
    console.log('========================================\n');

    // Return the router so server.js can wire it to Express
    return router;
  }
}

module.exports = new ApplicationContext();
