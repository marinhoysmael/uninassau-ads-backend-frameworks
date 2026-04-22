/**
 * ============================================================
 *  SERVER  (Spring concept: SpringApplication.run())
 * ============================================================
 *
 * This file is the application entry point — equivalent to
 * the main() method in a Spring Boot application:
 *
 *   @SpringBootApplication
 *   public class App {
 *       public static void main(String[] args) {
 *           SpringApplication.run(App.class, args);
 *       }
 *   }
 *
 * Responsibilities here:
 *   1. Load all component classes (like @ComponentScan)
 *   2. Boot the ApplicationContext (IoC container initialisation)
 *   3. Wire the Front Controller (Router/DispatcherServlet) to Express
 *   4. Start the HTTP server
 * ============================================================
 */

const express = require('express');

// ── Framework internals ────────────────────────────────────────────────────────
const applicationContext = require('./framework/applicationContext');

// ── Application components (equivalent to @ComponentScan discovering classes) ─
const UserRepository = require('./app/repositories/userRepository');
const UserService    = require('./app/services/userService');
const UserController = require('./app/controllers/userController');

// ─────────────────────────────────────────────────────────────────────────────
// Step 1 — Boot the ApplicationContext
//
// This single call:
//   a) Registers all components in the IoC Container  (@ComponentScan)
//   b) Instantiates beans and injects dependencies    (DI / @Autowired)
//   c) Registers HTTP routes in the Router            (HandlerMapping)
//
// Returns the configured Router (our DispatcherServlet).
// ─────────────────────────────────────────────────────────────────────────────
const router = applicationContext.bootstrap([
  UserRepository,   // @Repository — data access layer
  UserService,      // @Service    — business logic layer
  UserController,   // @Controller — HTTP layer
]);

// ─────────────────────────────────────────────────────────────────────────────
// Step 2 — Create the Express app (the raw HTTP server)
//
// Express is used here ONLY as an HTTP server (socket handling, body parsing).
// It plays the role of the Servlet Container (Tomcat / Jetty) in Spring.
// ALL routing logic lives inside our Router, not in Express routes.
// ─────────────────────────────────────────────────────────────────────────────
const app = express();
app.use(express.json()); // equivalent to Spring's Jackson JSON message converter

// ─────────────────────────────────────────────────────────────────────────────
// Step 3 — Wire the Front Controller
//
// Every request is forwarded to router.dispatch() — our DispatcherServlet.
// This mirrors the web.xml mapping:
//   <servlet-mapping>
//     <url-pattern>/*</url-pattern>
//     <servlet-name>dispatcherServlet</servlet-name>
//   </servlet-mapping>
// ─────────────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  /**
   * FRONT CONTROLLER pattern:
   * Every single HTTP request passes through this one function before
   * being dispatched to the correct handler.
   *
   * Spring's DispatcherServlet does exactly the same thing.
   */
  router.dispatch(req, res);
});

// ─────────────────────────────────────────────────────────────────────────────
// Step 4 — Start the HTTP server
// ─────────────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('\nAvailable endpoints:');
  console.log(`  GET http://localhost:${PORT}/users`);
  console.log(`  GET http://localhost:${PORT}/users/1`);
  console.log(`  GET http://localhost:${PORT}/users/2`);
  console.log('\n── Architecture Flow ──────────────────────────────');
  console.log('  HTTP Request');
  console.log('  → Express (Servlet Container / Tomcat)');
  console.log('  → router.dispatch() (DispatcherServlet)');
  console.log('  → UserController (handles the request)');
  console.log('  → UserService (applies business logic)');
  console.log('  → UserRepository (accesses data)');
  console.log('  → JSON Response');
  console.log('───────────────────────────────────────────────────\n');
});
