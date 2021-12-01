const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// For local Development
// const config = require('./config/connnectDB');
// const db = mysql.createConnection(config.local);

// For Production
const db = mysql.createConnection(process.env.JAWSDB_URL);

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
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
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
      console.log(err);
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
