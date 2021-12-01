const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// const config = require('./config/connnectDB');

const config = require('./config/db');

// const dbConfig =
//   process.env.NODE_ENV === 'production' ? config.heroku : config.local;
// const dbConfig = config.local;
const dbConfig =
  process.env.NODE_ENV === 'production' ? config.heroku : config.local;

const db = mysql.createConnection(dbConfig);

if (db) {
  console.log('connected as to db');
}

// app.get('/', (req, res) => {
//   let sql = 'CREATE DATABASE IF NOT EXISTS snippet_app';
//   db.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       res.send(data);
//     }
//     // console.log(result);
//   });
// });

// route to create new snippet
app.post('/snippet/create', (req, res) => {
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
      // console.log(err);
      res.send(data);
      // res.json(data)
      // res.render('index', { snippets: data });
    }
  );
});

// route to get all snippets
app.get('/main', (req, res) => {
  // to get snippets by language
  const language = req.query.language;
  if (language) {
    const query = `SELECT * FROM snippets WHERE language = "${language}"`;
    db.query(query, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  } else {
    // to get all snippets
    const query = 'SELECT * FROM snippets';
    db.query(query, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  }
});

// route to get a specific snippet
app.get('/snippet/:id', (req, res) => {
  const query = `SELECT * FROM snippets WHERE id=${req.params.id}`;
  db.query(query, (err, data) => {
    if (err) {
      // console.log(err);
    } else {
      res.send(data);
    }
  });
});

// route to update a snippet
app.put('/snippet/update', (req, res) => {
  const query =
    'UPDATE snippets SET title = ?, language =?, description=?, snippet =? WHERE ?';
  db.query(
    query,
    [
      req.body.title,
      req.body.language,
      req.body.description,
      req.body.snippet,
      { id: req.body.id },
    ],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
        // res.json(data);
      }
    }
  );
});

// route to delete a snipet
app.delete('/delete/:id', (req, res) => {
  const query = `DELETE FROM snippets WHERE id=${req.params.id}`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
      // res.send('deleted');
    }
  });
});

if ((process.env.NODE_ENV = 'production')) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server live on PORT: ${PORT}`);
});
