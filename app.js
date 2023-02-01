const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = 3000;
const { addEntry, deleteEntry, getEntries, updateEntry } = require('../__test__/entries');

let entries = [];

app.post('/entries', async (req, res) => {
  const entry =
        {
          id: 'id' + Math.random().toString(16).slice(2),
          name: req.body.name,
          address: req.body.address,
          email: req.body.email,
          age: req.body.age
        };

  await addEntry(entries, entry);
  console.log(entry.name.length);
  console.log(Object.entries(entry));
  if (entry.name.length > 1) {
    res.status(200).send('New entry for ' + req.body.name + ' has been added! Stay in touch!');
    console.log(entries);
  } else {
    res.status(500).send('please enter valid data');
  }
});

//

app.get('/entries', async (req, res) => {
  if (entries.length === 0) {
    res.status(404).send({ error: 'No entries found' });
  } else {
    await getEntries(entries);
    res.status(200).send(entries);
  }
});

app.delete('/entries/:id', (req, res) => {
  if (req.params.id) { deleteEntry(entries, req.params.id); }
  console.log(entries);
  res.status(200).send(entries);
  // do if statement
});

app.patch('/entries/:id', (req, res) => {
  const index = entries.findIndex(collection => collection.id === req.params.id);
  if (index === -1) {
    return res.status(404).send({ message: 'no matching records' });
  }
  entries = updateEntry(entries, req.params.id, req.body);

  res.status(200).send({ message: 'Collection updated successfully', entries });
});

// module.exports = app
//

app.listen(port, () => {
  console.log('server is up on port' + port);
});
