const UserController = require('../modules/user/controller/user.controller');

module.exports = async (fastify) => {
    fastify.get(`/api/v1/users`, UserController.findAll);
    fastify.get(`/api/v1/users/:id`, UserController.findOne);
    fastify.post(`/api/v1/users`, UserController.create);
    fastify.patch(`/api/v1/users/:id`, UserController.update);
    fastify.delete(`/api/v1/users/:id`, UserController.remove);
};
