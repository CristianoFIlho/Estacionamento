const data = require('../data/usuario');

const createUsuario = async (usuario) => {
    return data.createUsuario(usuario);
};

const updateUsuario = (usuario, id) => {
    return data.updateUsuario(usuario, id);
};

const deleteUsuario = (id) => {
    return data.deleteUsuario(id);
};

const getUsuario = (id) => {
    return data.getUsuario(id);
};


module.exports = {
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuario
};