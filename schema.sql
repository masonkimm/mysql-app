CREATE DATABASE IF NOT EXISTS snippet_app;

USE snippet_app;

DROP TABLE if EXISTS snippets;

CREATE TABLE snippets (
  id INT AUTO_INCREMENT,
  title VARCHAR(100),
  language VARCHAR (100),
  description VARCHAR (250),
  snippet LONGTEXT,
  PRIMARY KEY(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO snippets (title, language, description, snippet)
VALUES ('Test 1', 'HTML5', 'description goes here', 'snippet goes here');
