module.exports = {
  local: {
    host: 'localhost',
    port: 4000,
    user: 'root',
    password: 'password',
    database: 'snippet_app',
  },
  heroku: {
    host: 'w3epjhex7h2ccjxx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'pmb0jh2ku0tvbo81',
    password: 'd8fnnt3zxg0yq8aa',
    database: 'liqe5m2u2s8wa20g',
    port: 3306,
  },
  production: {
    use_env_variables: 'JAWSDB_URL',
    dialect: 'mysql',
  },
};
