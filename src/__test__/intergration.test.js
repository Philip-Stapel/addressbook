
const request = require('supertest');
const app = require('../../app');
const express = require('express');
app.use(express.urlencoded({ extended: false }));

// beforeEach(() => {
//
//         entries.length = 0;
//     });

describe('GET /entries', () => {
    let entries = []
    test('should respond with an error if no entries', async () => {
        const mockApp = request(app)
        const response = await mockApp.get('/entries').send(); //maybe take out await
        // console.log(entries + 'this is your entry')
        expect(response.status).toBe(404)
        console.log(entries + 'this is your entry')
        // test('should respond with an error if no entries', async () => {
        //     const response = await request(app).get("/entries").send()
        //     console.log(entries.length)
        //     expect(response.status).toBe(404)
        //     expect(response.text).toBe("No entries found")

    })
})




describe('POST /entries', () => {
    let entries = [];
    let entries = [];

    test('should respond with a 201 status code when new entry added', async () => {
        const newEntry = {
            id: '1',
            name: 'Phil',
            address: 'london',
            email: 'phil@example.com',
            age: '28'
        }
        describe('POST /entries', () => {
            test('should respond with a 201 status code and add entry to array when new entry is added', async () => {
                const newEntry = {
                    id: '1',
                    name: 'Phil',
                    address: 'london',
                    address: 'London',
                    email: 'phil@example.com',
                    age: '28'
                }

                const mockApp = request(app)
                const response = await mockApp.post('/entries').send(newEntry);
                const mockApp = request(app)
                const response = await mockApp.post('/entries').send(newEntry);

                expect(response.status).toBe(201);
                expect(response.text).toBe('New entry for Phil has been added! Stay in touch!');
                const response = await request(app)
                    .post('/entries')
                    .send(newEntry)
                    .set('Accept', 'application/json');
                expect(response.status).toBe(201);
                expect(response.text).toBe('New entry for Phil has been added! Stay in touch!');

                console.log((entries) + 'this is the entry' + response.text + response.body )
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
            const getResponse = await mockApp.get('/entries').send()
            expect(getResponse.body).toMatchObject([{
                id: (expect.any(String)),
                name: 'Phil',
                address: 'london',
                email: 'phil@example.com',
                age: '28'
            }
            ]);
            expect(entries.length).toBe(1);
        });

        test('should respond with a 400 status code when invalid entry is added', async () => {
            const invalidEntry = {
                name: '',
                address: '',
                email: '',
                age: ''
            }
            test('should respond with a 400 status code when invalid entry is added', async () => {
                test('should respond with a 400 status code and not add entry to array when invalid entry is added', async () => {
                    const invalidEntry = {
                        name: '',
                        address: '',
                        email: '',
                        age: ''
                    }

                    const response = await request(app).post('/entries').send(invalidEntry);
                    const response = await request(app).post('/entries').send(invalidEntry);

                    expect(response.status).toBe(400);
                    expect(response.text).toBe('Please enter valid data');
                    const response = await request(app)
                        .post('/entries')
                        .send(invalidEntry)
                        .set('Accept', 'application/json');
                    expect(response.status).toBe(400);
                    expect(response.text).toBe('Please enter valid data');

                });
            });
            expect(entries.length).toBe(1);
        });
    });

    describe('GET /entries', () => {
        let entries = []
        test('should respond with a 200 if entries are sent', async () => {
            const mockApp = request(app)
            const response = await mockApp.get('/entries').send(); //maybe take out await
            // console.log(entries + 'this is your entry')
            expect(response.status).toBe(200)
            describe('GET /entries', () => {
                let entries = []
                test('should respond with a 200 if entries are sent', async () => {
                    const mockApp = request(app)
                    const response = await mockApp.get('/entries').send(); //maybe take out await
                    // console.log(entries + 'this is your entry')
                    expect(response.status).toBe(200)


                })
            })
        })
    })

    describe('DELETE /entries', () => {
        test('it should delete entry and respond with status code 200', async () => {
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
    })

    describe('patch /entries', () => {
        test('it returns a 404 if not matching ID is found', async () => {
            describe('patch /entries', () => {
                test('it returns a 404 if not matching ID is found', async () => {

                    const mockApp = request(app)
                    const response = await mockApp.patch('/entries/2').send(); //maybe take out await
                    expect(response.status).toBe(404)
                })
                // test('it returns a 200 is a matching ID is found', async () => {
                //     const mockApp = request(app)
                //     const response = await mockApp.patch('/entries/1').send();
                //     expect(response.status).toBe(200)
                const mockApp = request(app)
                const response = await mockApp.patch('/entries/2').send(); //maybe take out await
                expect(response.status).toBe(404)
            })
            // test('it returns a 200 is a matching ID is found', async () => {
            //     const mockApp = request(app)
            //     const response = await mockApp.patch('/entries/1').send();
            //     expect(response.status).toBe(200)
// })
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
                //
                // expect.arrayContaining([{
                //     id: (expect.any(String)),
                //     name: 'Mike',
                //     address: 'Canterbury',
                //     email: 'sammy@example.com',
                //     age: '25'
                // }]))
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
                    //
                    // expect.arrayContaining([{
                    //     id: (expect.any(String)),
                    //     name: 'Mike',
                    //     address: 'Canterbury',
                    //     email: 'sammy@example.com',
                    //     age: '25'
                    // }]))

                })
            })
        })
    })


// describe('GET /entries', () => {
//     let entries = []
//     test('should respond with an error if no entries', async () => {
//         const mockApp = request(app)
//         const response = await mockApp.get('/entries').send(); //maybe take out await
//         // console.log(entries + 'this is your entry')
//         expect(response.status).toBe(404)
//         console.log(entries + 'this is your entry')
//         // test('should respond with an error if no entries', async () => {
//         //     const response = await request(app).get("/entries").send()
//         //     console.log(entries.length)
//         //     expect(response.status).toBe(404)
//         //     expect(response.text).toBe("No entries found")
// const request = require('supertest');
// const app = require('../../app');
// const express = require('express');
// app.use(express.urlencoded({ extended: false }));
//
//
//     })
// })





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


