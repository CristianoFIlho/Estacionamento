const data = require('../data/ocupacao');

const createOcupacao = async (ocupacao) => {
    return data.createOcupacao(ocupacao);
};

const updateOcupacao = (ocupacao, id) => {
    return data.updateOcupacao(ocupacao, id);
};

const deleteOcupacao = (id) => {
    return data.deleteOcupacao(id);
};

const getOcupacao = (id) => {
    return data.getOcupacao(id);
};


module.exports = {
    createOcupacao,
    updateOcupacao,
    deleteOcupacao,
    getOcupacao
};