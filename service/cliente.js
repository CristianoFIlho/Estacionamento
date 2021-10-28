const data = require('../data/cliente');

const createCliente = async (cliente) => {
    return data.createCliente(cliente);
};

const updateCliente = (cliente, id) => {
    return data.updateCliente(cliente, id);
};

const deleteCliente = (id) => {
    return data.deleteCliente(id);
};

const getCliente = (id) => {
    return data.getCliente(id);
};


module.exports = {
    createCliente,
    updateCliente,
    deleteCliente,
    getCliente
};