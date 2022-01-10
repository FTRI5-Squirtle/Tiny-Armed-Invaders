const { Pool } = require("pg");

const PG_URI =
  "postgres://kplblgqt:e5KUhdP-9kHC6AQll3beesglqgrO4fIR@castor.db.elephantsql.com/kplblgqt";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: function (queryString, params, callback) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};
