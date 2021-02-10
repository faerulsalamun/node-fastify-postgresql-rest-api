const db = require(`../../../helpers/database`);

class UserRepository {

    async findAll(offset, limit, sort) {
        return db.select('*')
            .from('users')
            .limit(limit)
            .offset(offset)
            .orderBy('id', sort);
    }

    async findOne(id) {
        return db.select('*')
            .from('users')
            .where('id', id)
            .limit(1);
    }

    async create(data) {
        return db.insert({
            name: data.name,
            address: data.address
        }).into('users');
    }

    async update(id, data) {
        return db('users')
            .where('id', id)
            .update({
                name: data.name,
                address: data.address
            });
    }

    async delete(id) {
        return db
            .from('users')
            .where('id', id)
            .delete();
    }


}

module.exports = new UserRepository();
