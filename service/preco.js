const data = require('../data/preco');

const createPreco = async (preco) => {
    return data.createPreco(preco);
};

const updatePreco = (preco, id) => {
    return data.updatePreco(preco, id);
};

const deletePreco = (id) => {
    return data.deletePreco(id);
};

const getPreco = (id) => {
    return data.getPreco(id);
};


module.exports = {
    createPreco,
    updatePreco,
    deletePreco,
    getPreco
};