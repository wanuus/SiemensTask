const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('POST /api/v1/auth', () => {
    // valid 
    it('should authenticate a user and return a token for valid credentials', async () => {
        const response = await request(app)
            .post('/api/v1/auth')
            .send({ email: 'user@gmail.com', password: 'user123' })
            .set('Authorization', `Bearer valid_token`);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
    });
    //invalid 
    it('should return an error for invalid credentials', async () => {
        const response = await request(app)
            .post('/api/v1/auth')
            .send({ email: 'user@gmail.com', password: 'wrongpassword' })
            .set('Authorization', 'Bearer invalid_token');

        expect(response.status).to.equal(401);
        expect(response.body).to.have.property('error', 'Invalid credentials');
    });
});
