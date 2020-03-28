const request = require('supertest');
const app = require('../../app')
const connection = require('../../database/connection')

describe('ONG', () => {
    beforeEach(async() => {
        await connection.migrate.latest();
    });

    afterlAll(async() => {
        await connection.destroy();
    });

    it('Deve conseguir criar uma Ong.',async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "contato@apad.com.br",
                whatsapp: "11999999999",
                city: "São Paulo",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})