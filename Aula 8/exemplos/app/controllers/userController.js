/**
 * ============================================================
 *  USER CONTROLLER  (Spring concept: @RestController)
 * ============================================================
 *
 * In Spring MVC, a Controller handles HTTP requests.
 * It receives the request, calls the appropriate Service method,
 * and returns the HTTP response (typically as JSON).
 *
 * Spring equivalent:
 *   @RestController
 *   @RequestMapping("/users")
 *   public class UserController {
 *
 *       @Autowired
 *       private UserService userService;
 *
 *       @GetMapping
 *       public List<User> list() {
 *           return userService.getAllUsers();
 *       }
 *
 *       @GetMapping("/{id}")
 *       public ResponseEntity<User> getById(@PathVariable Long id) {
 *           return ResponseEntity.ok(userService.getUserById(id));
 *       }
 *   }
 *
 * The Controller should NOT contain business logic —
 * that belongs in the Service layer.
 * ============================================================
 */

const { Injectable, Controller } = require('../../framework/decorators');

class UserController {
  /**
   * Constructor Injection
   * ---------------------
   * The IoC Container injects UserService automatically.
   *
   * Spring equivalent:
   *   @Autowired
   *   public UserController(UserService userService) { ... }
   *
   * @param {import('../services/userService')} userService
   */
  constructor(userService) {
    this.userService = userService; // dependency injected by the container
  }

  /**
   * list(req, res)
   * --------------
   * Handles GET /users
   * Returns all users as a JSON array.
   *
   * Spring equivalent:
   *   @GetMapping
   *   public List<User> list() { return userService.getAllUsers(); }
   *
   * @returns {User[]}
   */
  list(req, res) {
    const users = this.userService.getAllUsers();
    // The router automatically serialises the return value to JSON
    // — equivalent to @ResponseBody / @RestController in Spring
    return users;
  }

  /**
   * getById(req, res)
   * -----------------
   * Handles GET /users/:id
   * Returns a single user or a 404 response.
   *
   * Spring equivalent:
   *   @GetMapping("/{id}")
   *   public ResponseEntity<User> getById(@PathVariable Long id) { ... }
   */
  getById(req, res) {
    try {
      // Extract path parameter — Spring: @PathVariable
      const id = req.params && req.params.id
        ? req.params.id
        : req.path.split('/').pop();

      const user = this.userService.getUserById(id);
      return user;
    } catch (err) {
      // Spring equivalent: @ExceptionHandler(ResourceNotFoundException.class)
      res.status(404).json({ error: err.message });
    }
  }
}

// ── Apply decorators after class declaration ──────────────────────────────────

// @Controller — marks this as an HTTP controller (Spring: @RestController)
// Routes array maps HTTP verbs + paths to handler method names.
// Spring equivalent: @GetMapping("/users") on the list() method.
Controller([
  { method: 'GET', path: '/users',    handler: 'list'    },
  { method: 'GET', path: '/users/:id', handler: 'getById' },
])(UserController);

// @Injectable(['UserService']) — declares constructor dependency on UserService
Injectable(['UserService'])(UserController);

module.exports = UserController;
