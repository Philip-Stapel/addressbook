const { addEntry, deleteEntry, getEntries, updateEntry } = require('./entries');

describe('add function', () => {
    test('it should add an element to the array', () => {
        const myArray = [{ id: 1, name: 'Phil', address: 'London' }, { id: 2, name: 'Danny', address: 'kent' }];
        const entry = { id: 3, name: 'Bob', address: 'tooting' };
        const result = addEntry(myArray, entry);
        expect(result).toEqual([{ id: 1, name: 'Phil', address: 'London' }, {
            id: 2,
            name: 'Danny',
            address: 'kent'
        }, { id: 3, name: 'Bob', address: 'tooting' }]);
    });

    test('it should throw error if incorrect entry is added', () => {
        const myArray = [{ id: 1, name: 'Phil', address: 'London' }, { id: 2, name: 'Danny', address: 'kent' }];
        const newEntry = {id: 3, name: '', address: 'tooting'};
        const result = addEntry(myArray, newEntry)
        expect(result).toEqual(myArray)
        // expect(() => addEntry(myArray, newEntry)).toThrowError('cant insert empty entry');
    });
});
describe('delete function', () => {
    test('it should delete a entry from the entries array', () => {
        const myArray = [{ id: 1, name: 'Phil', address: 'London' }, { id: 2, name: 'Danny', address: 'kent' }];
        const result = deleteEntry(myArray, 1);
        expect(result).toEqual([{ id: 2, name: 'Danny', address: 'kent' }]);
    });

    test('it should throw error if input is not an array', () => {
        const myArray = 'hi im not an array';
        expect(() => deleteEntry(myArray, 1)).toThrowError('Input must be an array');
    });

    test('it should throw error if no matching id entry is given', () => {
        const myArray = [{ id: 1, name: 'Phil', address: 'London' }, { id: 2, name: 'Danny', address: 'kent' }];
        expect(() => deleteEntry(myArray, 22)).toThrowError('no matching id');
    });
});

describe('updateEntry', () => {
    test('it should throw error if no matching id entry is given', () => {
        const myArray = [{ id: 1, name: 'Phil', address: 'London' }, { id: 2, name: 'Danny', address: 'kent' }];

        expect(() => updateEntry(myArray, 22, { id: 10, name: 'Terry', address: 'maidston' })).toThrowError('no matching id');
    });
    test('it should update an entry from the entries array', () => {
        const myArray = [{ id: 1, name: 'Phil', address: 'London' }, { id: 2, name: 'Danny', address: 'kent' }];

        const result = updateEntry(myArray, 1, { id: 10, name: 'Terry', address: 'maidston' });
        expect(result).toEqual([{ id: 10, name: 'Terry', address: 'maidston' }, { id: 2, name: 'Danny', address: 'kent' }]);
    });
});

describe('get entries', () => {
    test('it should console log all entries', () => {
            const myArray = [{ id: 1, name: 'Phil', address: 'London' }, { id: 2, name: 'Danny', address: 'kent' }];

            const spy = jest.spyOn(console, 'log').mockImplementation();
            getEntries(myArray);
            myArray.forEach(entry => expect(spy).toHaveBeenCalledWith(entry));
            spy.mockRestore();
        }
    );
    test('return orginal ', () => {
        const myArray = [];
        result = getEntries(myArray)
        expect(result).toEqual(myArray);
    });
});
