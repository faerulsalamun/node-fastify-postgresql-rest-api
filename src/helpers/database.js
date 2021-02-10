const knex = require(`knex`)({
    client: `pg`,
    pool: {min: 0, max: 10},
    debug: false,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
});

module.exports = knex;
