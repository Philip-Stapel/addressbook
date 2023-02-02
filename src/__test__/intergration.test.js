
const request = require('supertest');
const app = require('../../app');
const express = require('express');
app.use(express.urlencoded({ extended: false }));

describe('GET /entries', () => {
    let entries = []
    test('should respond with an error if no entries', async () => {
        const mockApp = request(app)
        const response = await mockApp.get('/entries').send();
        expect(response.status).toBe(404)
    })
})
describe('POST /entries', () => {
    let entries = [];

    test('should respond with a 201 status code when new entry added', async () => {
        const newEntry = {
            id: '1',
            name: 'Phil',
            address: 'london',
            email: 'phil@example.com',
            age: '28'
        }

        const mockApp = request(app)
        const response = await mockApp.post('/entries').send(newEntry);

        expect(response.status).toBe(201);
        expect(response.text).toBe('New entry for Phil has been added! Stay in touch!');

        console.log((entries) + 'this is the entry' + response.text + response.body )

        const getResponse = await mockApp.get('/entries').send()
        expect(getResponse.body).toMatchObject([{
            id: (expect.any(String)),
            name: 'Phil',
            address: 'london',
            email: 'phil@example.com',
            age: '28'
        }
        ]);
    });

    test('should respond with a 400 status code when invalid entry is added', async () => {
        const invalidEntry = {
            name: '',
            address: '',
            email: '',
            age: ''
        }

        const response = await request(app).post('/entries').send(invalidEntry);
        expect(response.status).toBe(400);
        expect(response.text).toBe('Please enter valid data');

    });
});

describe('GET /entries', () => {
    let entries = []
    test('should respond with a 200 if entries are sent', async () => {
        const mockApp = request(app)
        const response = await mockApp.get('/entries').send(); //maybe take out await
        expect(response.status).toBe(200)
    })
})

describe('DELETE /entries', () => {
    test('it should delete entry and respond with status code 200', async () => {

        const entryToDelete =
        {
            id: '2',
            name: 'Dan',
            address: 'Kent',
            email: 'dan@example.com',
            age: '30'
        }
        const mockApp = request(app)
        const response = await mockApp.post('/entries').send(entryToDelete);
        expect(response.status).toBe(201);
        expect(response.text).toBe('New entry for Dan has been added! Stay in touch!');

        const getResponse = await mockApp.get('/entries').send()
        expect(getResponse.body).toEqual(expect.arrayContaining([{
            id: (expect.any(String)),
            name: 'Dan',
            address: 'Kent',
            email: 'dan@example.com',
            age: '30'
        }]));

        const deleteResponse = await mockApp.delete('/entries/' + entryToDelete.id).send();
        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.body).toEqual(expect.not.arrayContaining([{
            id: (expect.any(String)),
            name: 'Dan',
            address: 'Kent',
            email: 'dan@example.com',
            age: '30'
        }]));
    })

})

describe('patch /entries', () => {
    test('it returns a 404 if not matching ID is found', async () => {

        const mockApp = request(app)
        const response = await mockApp.patch('/entries/2').send(); //maybe take out await
        expect(response.status).toBe(404)
    })
    test('it updates an entry and gives 200 status code', async () => {
        const entryToUpdate = {
            id: '1',
            name: 'Mike',
            address: 'Canterbury',
            email: 'sammy@example.com',
            age: '25'
        }
        const mockApp = request(app)
        const response = await mockApp.patch('/entries/' + '1').send(entryToUpdate)
        expect(response.body.message).toEqual("Collection updated successfully")
        expect(response.status).toEqual(200)
        expect(response.body.entries[0]).toHaveProperty('name', 'Mike')
        expect(response.body.entries[0]).not.toHaveProperty('name', 'Phil')

    })
})

