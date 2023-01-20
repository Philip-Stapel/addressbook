const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = 3000;

let entries = []

app.post("/entries", (req, res) => {
    let entry =
        {
            'id': "id"+Math.random().toString(16).slice(2),
            'name': req.body.name,
            'address': req.body.address,
            'email': req.body.email,
            'age': req.body.age
        }

    entries.push(entry)
    console.log(entries)
    res.status(201).send('New entry for' + req.body.name + ' has been added! Stay in touch!')
});

app.get("/entries", ( req, res) => {
    if (entries.length === 0) {
        return res.status(400).send('the address book is empty')
    }
    res.status(200).send(entries)
    console.log(entries)
})

app.get("/entries/:id", (req, res) => {

    const yourEntry = entries.filter(({ id }) => id === req.params.id)

    if(yourEntry.length === 0) {
         return console.log("could not find entry")
    }

    res.status(200).send( yourEntry[0])
    console.log(yourEntry[0])

})


app.delete("/entries/:id", (req, res) => {

    console.log("req params", req.params.id)
    entries = entries.filter(({ id }) => id !== req.params.id)
    console.log(entries)
    res.status(200).send(entries)
    //do if statement
})

app.patch( "/entries/:id", (req, res) => {


    const collectionId = req.params.id;
    const updatedData = req.body;
    console.log(updatedData)
    const index = entries.findIndex(collection => collection.id === collectionId);
    if (index === -1) {

       return res.status(404).send( {message: 'no matching records'})
        console.log('matching records')
    }
    entries.splice(index, 1, updatedData);
    res.send({ message: 'Collection updated successfully', entries })
    console.log('your entry has been updated')
})




app.listen(port, () => {
    console.log("server is up on port" + port);
});



