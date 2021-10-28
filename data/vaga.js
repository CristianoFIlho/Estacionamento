const database = require('../config/mysqlConnection');

const createVaga = (vaga) => {
	return database.query(
        `insert into Vaga(numero_id, setor, vaga_id, Ocupacao_desocupacao_id, Desocupacao_desocupacao_id) 
         values ('${vaga.numero_id}', '${vaga.setor}', '${vaga.vaga_id}', '${vaga.ocupacao_desocupacao_id}', '${vaga.desocupacao_desocupacao_id}')
         returning *;`
    );
};

const updateVaga = (vaga, id) => {
	return database.query(
        `update "Vaga"
         set setor = '${vaga.setor}'
         vaga_id = '${vaga.vaga_id}',
         Ocupacao_desocupacao_id = '${vaga.ocupacao_desocupacao_id}',
         Desocupacao_desocupacao_id = '${vaga.desocupacao_desocupacao_id}',
         where numero_id = ${id}
         returning *;`
    );
};

const deleteVaga = async (id) => {
    await database.query(
        `delete from "Vaga"
         where numero_id = ${id};`
    );
	return database.query(
        `delete from "Vaga"
         where numero_id = ${id};`
    );
};

const getVaga = async (id) => {
	const Vaga = await database.query(
        `select setor, vaga_id, numero_id, Ocupacao_desocupacao_id, Desocupacao_desocupacao_id
         from Vaga
         where numero_id = ${id};`
    );

    return Vaga;
};

module.exports = {
    createVaga,
    updateVaga,
    deleteVaga,
    getVaga,
};