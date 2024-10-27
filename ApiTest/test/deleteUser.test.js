const request = require('supertest');
const app = require('../app'); // Adjust the path as necessary
const { expect } = require('chai');

describe('DELETE /api/v1/users', () => {
    //valid
    it('should delete user for a valid token', async () => {
        const response = await request(app)
            .delete('/api/v1/users')
            .set('Authorization', 'Bearer eyJhbGciOiJI...'); // Use the actual valid token here

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', 'User deleted with success');
    });
//invalid
    it('should return an error for an invalid token', async () => {
        const response = await request(app)
            .delete('/api/v1/users')
            .set('Authorization', 'Bearer invalid_token'); // Using an invalid token

        expect(response.status).to.equal(401);
        expect(response.body).to.have.property('error', 'Unauthorized access');
    });
});
