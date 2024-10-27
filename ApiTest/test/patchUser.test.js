const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('PATCH /api/v1/users', () => {
    //valid
    it('should update user information for a valid token', async () => {
        const response = await request(app)
            .patch('/api/v1/users')
            .set('Authorization', 'Bearer eyJhbGciOiJI...')
            .send({
                name: 'newName',
                email: 'new_email@gmail.com',
                password: 'newpassword123'
            });

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', 'User updated with success');
    });

//invalid
    it('should return an error for an invalid token', async () => {
        const response = await request(app)
            .patch('/api/v1/users')
            .set('Authorization', 'Bearer invalid_token') // Using an invalid token
            .send({
                name: 'newName',
                email: 'new_email@gmail.com',
                password: 'newpassword123'
            });
    
        expect(response.status).to.equal(401);
        expect(response.body).to.have.property('error', 'Unauthorized access');
    });
    
    
//missing fields 
    it('should return an error for missing fields', async () => {
        const response = await request(app)
            .patch('/api/v1/users')
            .set('Authorization', 'Bearer eyJhbGciOiJI...') 
            .send({}); // Sending an empty body

        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('error', 'All fields are required');
    });
});
