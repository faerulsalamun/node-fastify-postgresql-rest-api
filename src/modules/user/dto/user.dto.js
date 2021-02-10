class UserDto {
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get address() {
        return this._address;
    }

    set address(newAddress) {
        this._address = newAddress;
    }
}

module.exports = UserDto;
