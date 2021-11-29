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

// route to create new snippet
app.post('/api/snippet/create', (req, res) => {
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
app.get('/api/main', (req, res) => {
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
// app.get('/api/main', (req, res) => {
//   const query = 'SELECT * FROM snippets';
//   db.query('SELECT * FROM snippets', (err, data) => {
//     if (err) {
//       // console.log(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

// route to get snippets by language
// app.get('/api/snippets', (req, res) => {
//   const language = req.query.language;
//   console.log(language);

//   if (language) {
//     const query = `SELECT * FROM snippets WHERE language = "${language}"`;
//     db.query(query, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(data);
//       }
//     });
//   }
// });

// route to get a specific snippet
app.get('/api/snippet/:id', (req, res) => {
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
app.put('/api/snippet/update', (req, res) => {
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
app.delete('/api/delete/:id', (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server live on PORT: ${PORT}`);
});
