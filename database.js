const { Sequelize } = require('sequelize');
const { veiculosModel } = require('./models');
function authenticate() {
    try {
        const sequelize = new Sequelize('estacionamento', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });
        sequelize.authenticate();
        return sequelize;
    } catch (error) {
        
    }
}
async function getVeiculos() {
    const sequelize = authenticate();
    const veiculos = veiculosModel(sequelize);
    const result = await veiculos.findAll();
    return result
};

async function postVeiculos(body) {
    const sequelize = authenticate();
    const veiculos = veiculosModel(sequelize);
    const veiculo = await veiculos.create({
        ocorrencia_id_ocorencia: body.ocorrencia_id_ocorencia,
    });
    
    return veiculo
};


module.exports = { getVeiculos, postVeiculos };