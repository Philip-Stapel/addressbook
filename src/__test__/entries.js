function addEntry(array, entry) {
    array.push(entry);
    return array;
}

function deleteEntry(array, id) {
    return array.filter( entry => entry.id !== id)
}

function updateEntry(array, id, updatedEntry) {
    return array.map( entry => {
        if(entry.id === id) {
            return updatedEntry;
        }else {
            return entry
        }
    })
}

function getEntries(array) {
    array.forEach(function(entry) {
        console.log(entry)
    });
}

module.exports = { addEntry, deleteEntry, getEntries, updateEntry}