const request = require('supertest');
const app = require('../../app');

let entries = [];

describe('POST /entries', () => {
    test('should respond with a 201 status code and add entry to array when new entry is added', async () => {
        const newEntry = {
            name: 'Phil',
            address: 'London',
            email: 'phil@example.com',
            age: '28'
        }
        const response = await request(app)
            .post('/entries')
            .send(newEntry)
            .set('Accept', 'application/json');
        expect(response.status).toBe(201);
        expect(entries.length).toBe(1);
    });

    test('should respond with a 400 status code and not add entry to array when invalid entry is added', async () => {
        const invalidEntry = {
            name: '',
            address: '',
            email: '',
            age: ''
        }
        const response = await request(app)
            .post('/entries')
            .send(invalidEntry)
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(entries.length).toBe(1);
    });
});







// const request = require('supertest');
// const app = require('../../app');
// const express = require('express');
// app.use(express.urlencoded({ extended: false }));
//
//
// let entries = [];
//
// describe('POST /entries', () => {
//     test('should respond with a 201 status code when new entry added', async () => {
//         const newEntry = {
//             name: 'Phil',
//             address: 'london',
//             email: 'phil@example.com',
//             age: '28'
//         }
//         const response = await request(app).post('/entries').send(newEntry);
//         expect(response.status).toBe(201);
//         expect(response.text).toBe('New entry for Phil has been added! Stay in touch!')
//         expect(entries.length).toBe(1);
//     });
//
//     test('should respond with a 500 status code when invalid entry is added', async () => {
//         const invalidEntry = {
//             name: '',
//             address: '',
//             email: '',
//             age: ''
//         }
//         const response = await request(app).post('/entries').send(invalidEntry);
//         expect(response.status).toBe(500);
//         expect(response.text).toBe('please enter valid data');
//     });
//
//     test('should add entry to array', async () => {
//         const userThree = {
//             name: 'danny jones',
//             address: '123 fakestreet',
//             email: 'dannyjones@email.com',
//             age: '30'
//         }
//         const response = await request(app).post('/entries').send(userThree);
//         expect(entries.length).toBe(2);
//     });
//
// });
//
//
//
//
//
// //
// //
// // let entries = []
// // const userOne = {
// //   id: 'id91ce87d18ecb4',
// //   name: ' danny',
// //   address: 'england',
// //   email: 'danny@yahoo.co.uk',
// //   age: '30'
// // };
// // const userTwo = {
// //   id: 'iddb03eae154ce9',
// //   name: ' laura',
// //   address: 'england',
// //   email: 'laura@email.co.uk',
// //   age: '40'
// // };
// // const userThree = {
// //   name: 'harry',
// //   address: 'scotland',
// //   email: 'doug@email.co.uk',
// //   age: '50'
// // };
// //
// // const userFour = {
// //   name: ' alfie',
// //   address: 'wales',
// //   email: 'wales@email.co.uk',
// //   age: '40'
// // };
// //
// // describe('POST /users', () => {
// //     beforeEach(() => {
// //          entries = [];
// //         entries.push(userOne, userTwo);
// //     });
// //
// //     // afterEach(() => {
// //     //     entries.length = 0;
// //     // });
// //     test('should respond with a 201 status code when new user added', async () => {
// //         const response = await request(app).post('/entries').send(userThree);
// //         expect(response.statusCode).toBe(201);
// //         console.log(entries.length + 'this is length of array' + entries);
// //     })
// // });
//
//
//  //  test('should inform user that entry has been added', async () => {
//  //    const response = await request(app).post('/entries').send(userThree);
//  //    expect(response.text).toContain('New entry for harry has been added! Stay in touch!');
//  //    console.log('second __test__' + entries);
//  //  });
//  //
//  // test("should add entry to array", async () => {
//  //
//  //            const response = await request(app).post("/entries").send(userThree)
//  //        // entries.push(JSON.stringify(userThree))
//  //        //     console.log(entries + 'now')
//  //            expect(entries.length).toBe(3)
//  //     console.log(entries + 'this is entries array')
//  //            // console.log(entries + 'entries after')
//
// //         })
// // })
// //
// // describe("GET /entries", () => {
// //
// //     let entries = [];
// //     beforeEach(() => {
// //         entries.push(JSON.stringify(userTwo), JSON.stringify(userOne))
// //     });
// //
// //     // afterEach(() => {
// //     //     entries.length = 0;
// //     // });
// //
// //     test.skip("should respond with an error if no entries", async () => {
// //         const response = await request(app).get("/entries")
// //         expect(response.status).toBe(400)
// //         expect(response.text).toBe("the address book is empty")
// //
// //     })
// //
// //
// //     // __test__("should return status code 200 if entries ", async () => {
// //     //     console.log(entries.length + 'this length')
// //     //     const response = await request(app).get("/entries").send(entries)
// //     //     console.log(entries + 'after')
// //     //     console.log(JSON.stringify(response) + 'response')
// //     //     console.log(entries.length + 'there is shit here')
// //     //     expect(response.statusCode).toBe(200)
// //     // })
// //
// //     test("Should return all entries", async () => {
// //         const response = await request(app).get("/entries").send(entries)
// //         console.log(JSON.stringify(response))
// //         expect(response.json(data)).toBe(entries)
// //     })
// // })
// //
// // //
// // // // describe( "DELETE /entries/:id" )
// //
