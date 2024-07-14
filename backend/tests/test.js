// tests/test.js

// import chai assertion library
import { expect } from 'chai';

// group tests together and describe what is being tested
describe('GitHub API', function () {
  describe('Search Users', function () {
    // describe the actual test
    it('should return a list of users for a valid search query', async function () {
      /**
       * Test case to verify the API's response for searching users
       * by sending a GET request to "http://localhost:8080/api/users?q=<query>".
       */

      const response = await fetch('http://localhost:8080/api/users?q=jediah', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const body = await response.json();

      // ensure the response status is 200 
      expect(response.status).to.equal(200);
      // check if any users were found
      expect(body.total_count).to.be.greaterThan(0);
    });

    it('should return 400 for an empty search query', async function () {
      /**
       * Test case to verify that the server returns a status of 400 when
       * the user provides an empty search query.
       */

      const response = await fetch('http://localhost:8080/api/users?q=', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      // verify that the server returns status 400 for invalid input
      expect(response.status).to.equal(400);
    });
  });

  describe('User Details', function () {
    it('should return user details for a valid username', async function () {
      /**
       * Test case to verify the API's response for fetching user details
       * by sending a GET request to "http://localhost:8080/api/users/<username>".
       */

      const response = await fetch('http://localhost:8080/api/users/jediahjireh', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const body = await response.json();

      // ensure the response status is 200 
      expect(response.status).to.equal(200);
      // adjust this assertion based on actual response structure
      expect(body.user).to.have.property('login', 'jediahjireh');
    });

    it('should return 404 for a non-existing user', async function () {
      /**
       * Test case to verify that the server returns a status of 404 when
       * the user does not exist.
       */

      const response = await fetch('http://localhost:8080/api/users/nonexistentuser', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      // verify that the server returns status 404 for a non-existing user
      expect(response.status).to.equal(404);
    });
  });
});