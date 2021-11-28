const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const config = require('./config/connnectDB');
// const dbConfig =
//   process.env.NODE_ENV === 'production' ? config.heroku : config.local;
const dbConfig = config.local;
const db = mysql.createConnection(dbConfig);

if (db) {
  console.log('connected as to db');
}

app.post('/create', (req, res) => {
  db.query(
    {
      sql: 'INSERT INTO snippets (title, language, description, snippet) values (?, ?, ?, ?)',
      values: [
        req.body.title,
        req.body.language,
        req.body.description,
        req.body.snippet,
      ],
    },
    (err, data) => {
      if (err) throw err;
      console.log(err);
      res.send('Values inserted into DB');
      // res.json(data)
      // res.render('index', { snippets: data });
    }
  );
});

app.get('/main', (req, res) => {
  const query = 'SELECT * FROM snippets';
  db.query('SELECT * FROM snippets', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ snipetts: data });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server live on PORT: ${PORT}`);
});
