const data = require('../data/vaga');

const createVaga = async (vaga) => {
    return data.createVaga(vaga);
};

const updateVaga = (vaga, id) => {
    return data.updateVaga(vaga, id);
};

const deleteVaga = (id) => {
    return data.deleteVaga(id);
};

const getVaga = (id) => {
    return data.getVaga(id);
};


module.exports = {
    createVaga,
    updateVaga,
    deleteVaga,
    getVaga
};