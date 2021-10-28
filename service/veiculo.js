const data = require('../data/veiculo');

const createVeiculo = async (veiculo) => {
    return data.createVeiculo(veiculo);
};

const updateVeiculo = (veiculo, id) => {
    return data.updateVeiculo(veiculo, id);
};

const deleteVeiculo = (id) => {
    return data.deleteVeiculo(id);
};

const getVeiculo = (id) => {
    return data.getVeiculo(id);
};


module.exports = {
    createVeiculo,
    updateVeiculo,
    deleteVeiculo,
    getVeiculo
};