const express = require('express');
const bc = require('./controllers/books_controller.js');

const app = express();

app.use(express.json()); 
app.use(express.status(__dirname + '/../build'));

app.get('/api/books', bc.read);
app.post('/app/books', bc.create);
app.put('/app/books/:id', bc.update);
app.delete('app/books/:id', bc.delete);


const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
