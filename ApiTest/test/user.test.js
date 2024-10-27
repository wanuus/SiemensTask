const request = require('supertest');
const app = require('../app'); 
const { expect } = require('chai');

describe('POST /api/v1/users', () => {
    //valid
    it('should register a user and return a token for valid credentials', async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({ 
                name: 'user', 
                email: 'user@gmail.com', 
                password: 'user123' 
            });

        expect(response.status).to.equal(200); 
        expect(response.body).to.have.property('token');
    });
//invalid
    it('should return an error for invalid registration data', async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({ 
                name: 'user', 
                email: 'user@gmail.com',
                // Invalid password (empty) 
                password: '' 
            });
        //400 for bad request
        expect(response.status).to.equal(400); 
        expect(response.body).to.have.property('error'); 
    });
});
