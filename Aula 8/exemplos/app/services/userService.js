/**
 * ============================================================
 *  USER SERVICE  (Spring concept: @Service)
 * ============================================================
 *
 * In Spring, a Service class holds business logic.
 * It sits between the Controller (HTTP layer) and the Repository
 * (data-access layer), and is annotated with @Service.
 *
 * Spring equivalent:
 *   @Service
 *   public class UserService {
 *
 *       @Autowired
 *       private UserRepository userRepository;
 *
 *       public List<User> getAllUsers() {
 *           return userRepository.findAll();
 *       }
 *   }
 *
 * The key idea: the UserRepository is INJECTED by Spring's IoC
 * container — UserService never creates it with "new".
 * We replicate that same principle here.
 * ============================================================
 */

const { Injectable, Service } = require('../../framework/decorators');

class UserService {
  /**
   * Constructor Injection
   * ---------------------
   * The IoC Container calls this constructor automatically,
   * passing the already-resolved UserRepository instance.
   *
   * Spring equivalent:
   *   @Autowired
   *   public UserService(UserRepository userRepository) { ... }
   *
   * @param {import('../repositories/userRepository')} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository; // dependency injected by the container
  }

  /**
   * getAllUsers()
   * ------------
   * Business logic: retrieve all users.
   *
   * In a real app this layer would also handle:
   *   - Authorization checks
   *   - Data transformation / mapping to DTOs
   *   - Pagination
   *   - Caching
   *
   * @returns {User[]}
   */
  getAllUsers() {
    return this.userRepository.findAll();
  }

  /**
   * getUserById(id)
   * ---------------
   * Business logic: retrieve a user by ID.
   * Throws when the user does not exist
   * (analogous to Spring's ResourceNotFoundException / Optional.orElseThrow).
   *
   * @param {number} id
   * @returns {User}
   */
  getUserById(id) {
    const user = this.userRepository.findById(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }
}

// ── Apply decorators after class declaration ──────────────────────────────────

// @Service — marks this as a service-layer stereotype (Spring: @Service)
Service(UserService);

// @Injectable(['UserRepository']) — declares the constructor dependency.
// The container will resolve 'userrepository' and inject it automatically.
Injectable(['UserRepository'])(UserService);

module.exports = UserService;
