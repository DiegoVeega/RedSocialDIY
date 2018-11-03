const mongoC = require('mongoose');

const UserModel = new mongoC.Schema({
    username: String,
    name: String,
    passwd: String
});

const user = mongoC.model('usuarios', UserModel);
module.exports = user;