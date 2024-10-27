const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /api/v1/users', () => {
    //valid
    it('should return user information for a valid token', async () => {
        const response = await request(app)
            .get('/api/v1/users')
            .set('Authorization', 'Bearer eyJhbGciOiJI...'); // Replace with your valid token

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', 46643);
        expect(response.body).to.have.property('name', 'user');
        expect(response.body).to.have.property('email', 'user@gmail.com');
        expect(response.body).to.have.property('imageUrl', 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg');
    });
//invalid
    it('should return an error for an invalid token', async () => {
        const response = await request(app)
            .get('/api/v1/users')
            .set('Authorization', 'Bearer invalid_token');

        expect(response.status).to.equal(401);
        expect(response.body).to.have.property('error', 'Unauthorized access');
    });
});
