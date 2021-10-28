const data = require('../data/ocorrencia');

const createOcorrencia = async (ocorrencia) => {
    return data.createOcorrencia(ocorrencia);
};

const updateOcorrencia = (ocorrencia, id) => {
    return data.updateOcorrencia(ocorrencia, id);
};

const deleteOcorrencia = (id) => {
    return data.deleteOcorrencia(id);
};

const getOcorrencia = (id) => {
    return data.getOcorrencia(id);
};


module.exports = {
    createOcorrencia,
    updateOcorrencia,
    deleteOcorrencia,
    getOcorrencia
};