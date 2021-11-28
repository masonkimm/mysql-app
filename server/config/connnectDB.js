const localCreds = require('./creds.local.json');

module.exports = {
  local: {
    host: localCreds.host,
    user: localCreds.user,
    password: localCreds.password,
    database: localCreds.database,
  },
};
