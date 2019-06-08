const express = require("express")
const schema = require('./schema')
const graphqlHTTP = require('express-graphql')
const db = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/devotionals', db.getDevotionals)

app.get('/devotional/:id', db.getDevotionalByID)

app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port $(PORT)`);
});
