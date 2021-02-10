const UserService = require(`../service/user.service`);

class UserController {

    async findAll(request, reply) {
        const {offset, limit, sort} = request.query;

        const data = await UserService.findAll(offset, limit, sort);

        reply
            .code(200)
            .header(`Content-Type`, `application/json; charset=utf-8`)
            .send({
                meta: {
                    code: 200,
                    message: `Ok`,
                },
                data
            });
    }

    async findOne(request, reply) {
        const data = await UserService.findOne(request.params.id);

        reply
            .code(200)
            .header(`Content-Type`, `application/json; charset=utf-8`)
            .send({
                meta: {
                    code: 200,
                    message: `Ok`,
                },
                data: data.length > 0 ? data[0] : null
            });
    }

    async create(request, reply) {
        await UserService.create(request.body);

        reply
            .code(201)
            .header(`Content-Type`, `application/json; charset=utf-8`)
            .send({
                meta: {
                    code: 201,
                    message: `Created`,
                }
            });
    }

    async update(request, reply) {
        await UserService.update(request.params.id, request.body);

        reply
            .code(204)
            .header(`Content-Type`, `application/json; charset=utf-8`)
            .send({
                meta: {
                    code: 204,
                    message: `No Content`,
                }
            });
    }

    async remove(request, reply) {
        await UserService.delete(request.params.id);

        reply
            .code(204)
            .header(`Content-Type`, `application/json; charset=utf-8`)
            .send({
                meta: {
                    code: 204,
                    message: `No Content`,
                }
            });
    }

}

module.exports = new UserController()
