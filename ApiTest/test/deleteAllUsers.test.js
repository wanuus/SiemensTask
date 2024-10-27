const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('DELETE /api/v1/all-users', () => {
    //valid
    it('should delete all users for a valid admin key', async () => {
        const response = await request(app)
            .delete('/api/v1/all-users')
            .send({ key_admin: 'keyadmin123' });

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', 'Users deleted with success');
    });
//invalid
    it('should return an error for an invalid admin key', async () => {
        const response = await request(app)
            .delete('/api/v1/all-users')
            .send({ key_admin: 'wrongkey' });

        expect(response.status).to.equal(403);
        expect(response.body).to.have.property('error', 'Forbidden: Invalid admin key');
    });
});
