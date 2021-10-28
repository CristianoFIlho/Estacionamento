const database = require('../config/mysqlConnection');

const createVeiculo = (veiculo) => {
	return database.query(
        `insert into Veiculo(veiculo_id, ocorrencia_id_ocorencia) 
         values ('${veiculo.veiculo_id}', '${veiculo.ocorrencia_id_ocorencia}')
         returning *;`
    );
};

const updateVeiculo = (veiculo, id) => {
	return database.query(
        `update "Veiculo"
         set ocorrencia_id_ocorencia = '${veiculo.ocorrencia_id_ocorencia}',
         where veiculo_id = ${id}
         returning *;`
    );
};

const deleteVeiculo = async (id) => {
    await database.query(
        `delete from "Veiculo"
         where veiculo_id = ${id};`
    );
	return database.query(
        `delete from "Veiculo"
         where veiculo_id = ${id};`
    );
};

const getVeiculo = async (id) => {
	const Veiculo = await database.query(
        `select ocorrencia_id_ocorencia, veiculo_id
         from Veiculo
         where veiculo_id = ${id};`
    );

    return Veiculo;
};

module.exports = {
    createVeiculo,
    updateVeiculo,
    deleteVeiculo,
    getVeiculo,
};