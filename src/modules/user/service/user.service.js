const UserRepository = require(`../repository/user.repository`);
const UserDto = require(`../dto/user.dto`);

class UserService {

    async findAll(offset = 0, limit = 10, sort = 'desc') {
        return await UserRepository.findAll(offset, limit, sort);
    }

    async findOne(id) {
        return await UserRepository.findOne(id);
    }

    async create(data) {
        let userDto = new UserDto();
        userDto.name = data.name;
        userDto.address = data.address;

        return await UserRepository.create(userDto);
    }

    async update(id, data) {
        let userDto = new UserDto();
        userDto.name = data.name;
        userDto.address = data.address;

        return await UserRepository.update(id, userDto);
    }

    async delete(id) {
        return await UserRepository.delete(id);
    }

}

module.exports = new UserService()

