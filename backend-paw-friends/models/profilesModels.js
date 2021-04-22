const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const profileSchema = new Schema({
    senha: {
        type: String,
        required: true,
        maxLength: 20,
    },
    cidade: {
        type: String,
        required: true,
        maxLength: 50,
    },
    cep: {
        type: Number,
        required: true,
        max: 99999999,
    },
    cpf: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 99999999999,
    },
    telefone: {
        type: Number,
        required: true,
        min: 10000000,
        max: 9999999999999,
    },
    email: {
        type: String,
        required: true,
        maxLength: 60,
    },
    sobrenome: {
        type: String,
        required: true,
        maxLength: 60,
    },
    nome: {
        type: String,
        required: true,
        maxLength: 30,
    },
    user: {
        type: String,
        required: true,
        max: 20,
    },
    img: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },






})

profileSchema.plugin(normalize);

var Profiles = mongoose.model('Perfil', profileSchema);

module.exports = Profiles;