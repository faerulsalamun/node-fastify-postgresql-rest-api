const fastify = require(`fastify`)({logger: true});

const createServer = async (options) => {
    try {
        // routes
        require(`./src/routes/api`)(fastify);

        await fastify.listen(3000, `0.0.0.0`);
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

module.exports = {
    createServer,
};
