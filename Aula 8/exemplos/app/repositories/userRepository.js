/**
 * ============================================================
 *  USER REPOSITORY  (Spring concept: @Repository)
 * ============================================================
 *
 * In Spring, a Repository is responsible for data access.
 * It abstracts the persistence layer (database, JPA, JDBC, etc.).
 *
 * Spring equivalent:
 *   @Repository
 *   public class UserRepository {
 *       public List<User> findAll() { ... }
 *       public Optional<User> findById(Long id) { ... }
 *   }
 *
 * Or with Spring Data JPA:
 *   public interface UserRepository extends JpaRepository<User, Long> {}
 *
 * Here we simulate the database with an in-memory array.
 * In a real project this would be replaced by actual DB queries.
 * ============================================================
 */

const { Injectable, Repository } = require('../../framework/decorators');
const User = require('../models/user');

class UserRepository {
  constructor() {
    /**
     * In-memory data store — simulates a database table.
     *
     * In Spring + JPA this would be managed by an EntityManager
     * backed by a real relational database.
     */
    this.users = [
      new User(1, 'Alice'),
      new User(2, 'Bob'),
      new User(3, 'Charlie'),
    ];
  }

  /**
   * findAll()
   * ---------
   * Returns every user record.
   *
   * Spring Data equivalent:
   *   userRepository.findAll()  →  SELECT * FROM users
   *
   * @returns {User[]}
   */
  findAll() {
    return this.users;
  }

  /**
   * findById(id)
   * ------------
   * Returns a single user by their ID, or undefined when not found.
   *
   * Spring Data equivalent:
   *   userRepository.findById(id)  →  SELECT * FROM users WHERE id = ?
   *
   * @param {number} id
   * @returns {User|undefined}
   */
  findById(id) {
    return this.users.find((u) => u.id === Number(id));
  }
}

// ── Apply decorators after class declaration so the class name is preserved ──
// Spring reads these as compile-time annotations; we apply them at module load.

// @Repository — marks this as a data-access stereotype (Spring: @Repository)
Repository(UserRepository);

// @Injectable([]) — no constructor dependencies; registers this bean in the container
Injectable([])(UserRepository);

module.exports = UserRepository;
