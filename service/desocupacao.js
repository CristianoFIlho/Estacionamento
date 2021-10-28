const data = require('../data/desocupacao');

const createDesocupacao = async (desocupacao) => {
    return data.createDesocupacao(desocupacao);
};

const updateDesocupacao = (desocupacao, id) => {
    return data.updateDesocupacao(desocupacao, id);
};

const deleteDesocupacao = (id) => {
    return data.deleteDesocupacao(id);
};

const getDesocupacao = (id) => {
    return data.getDesocupacao(id);
};


module.exports = {
    createDesocupacao,
    updateDesocupacao,
    deleteDesocupacao,
    getDesocupacao
};