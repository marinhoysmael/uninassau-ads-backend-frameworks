/**
 * ============================================================
 *  IoC CONTAINER  (Spring concept: ApplicationContext / BeanFactory)
 * ============================================================
 *
 * In Spring, the IoC Container is responsible for:
 *   - Reading component metadata (annotations like @Component, @Service, etc.)
 *   - Instantiating classes (beans)
 *   - Injecting dependencies automatically
 *   - Managing the lifecycle of every object
 *
 * Here we implement that same idea in plain JavaScript:
 *   - register()  → equivalent to Spring's @Component scan / bean definition
 *   - resolve()   → equivalent to Spring's getBean() / dependency resolution
 *
 * The container inspects each class's static `dependencies` array
 * (set by our decorators) to know what to inject — analogous to
 * how Spring reads constructor parameter types via reflection.
 * ============================================================
 */

class Container {
  constructor() {
    /**
     * registry  → stores class constructors by their lowercase name
     *             (Bean Definition Registry in Spring)
     */
    this.registry = new Map();

    /**
     * instances → stores already-created singletons
     *             (Singleton Bean Cache in Spring)
     */
    this.instances = new Map();
  }

  /**
   * register(ClassRef)
   * ------------------
   * Registers a class in the container so it can be resolved later.
   * Equivalent to declaring a @Bean or letting @ComponentScan pick it up.
   *
   * @param {Function} ClassRef - The class constructor to register
   */
  register(ClassRef) {
    const name = ClassRef.name.toLowerCase(); // e.g. "UserService" → "userservice"
    this.registry.set(name, ClassRef);
    console.log(`[Container] Registered: ${ClassRef.name}`);
  }

  /**
   * resolve(name)
   * -------------
   * Instantiates a registered class and recursively injects its dependencies.
   * This is the heart of Dependency Injection (DI).
   *
   * Equivalent to Spring's:
   *   - BeanFactory.getBean()
   *   - Constructor injection via @Autowired
   *
   * Beans are singletons by default — same behaviour as Spring's
   * default @Scope("singleton").
   *
   * @param {string} name - The lowercase class name to resolve
   * @returns {object} The resolved (and injected) instance
   */
  resolve(name) {
    const key = name.toLowerCase();

    // --- Singleton check: return existing instance if already created ---
    if (this.instances.has(key)) {
      return this.instances.get(key);
    }

    const ClassRef = this.registry.get(key);
    if (!ClassRef) {
      throw new Error(
        `[Container] No component registered for "${name}". ` +
        `Did you forget to call container.register(${name})?`
      );
    }

    // --- Resolve dependencies declared via the @Injectable decorator ---
    // In Spring this is done by inspecting constructor parameter types
    // through Java reflection.
    const deps = ClassRef.dependencies || []; // e.g. ['userrepository']
    const resolvedDeps = deps.map((dep) => this.resolve(dep));

    // --- Instantiate the class with its resolved dependencies -----------
    const instance = new ClassRef(...resolvedDeps);

    // --- Cache as singleton ---------------------------------------------
    this.instances.set(key, instance);
    console.log(`[Container] Resolved:   ${ClassRef.name}`);

    return instance;
  }

  /**
   * getAll()
   * --------
   * Resolves every registered component.
   * Similar to Spring loading all beans on startup (eager initialisation).
   */
  getAll() {
    for (const name of this.registry.keys()) {
      this.resolve(name);
    }
  }
}

module.exports = new Container(); // Export a single shared instance (like Spring's context)
