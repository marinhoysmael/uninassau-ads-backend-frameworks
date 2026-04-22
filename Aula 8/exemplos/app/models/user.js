/**
 * ============================================================
 *  USER MODEL  (Spring concept: Domain / Entity)
 * ============================================================
 *
 * In Spring this would be a plain Java object (POJO) annotated
 * with @Entity (JPA) or used as a simple DTO/domain model.
 *
 * Here it's a lightweight class that represents the data shape
 * of a User in our application.
 * ============================================================
 */

class User {
  /**
   * @param {number} id   - Unique identifier (like a primary key / @Id in JPA)
   * @param {string} name - User's display name
   */
  constructor(id, name) {
    this.id   = id;
    this.name = name;
  }
}

module.exports = User;
