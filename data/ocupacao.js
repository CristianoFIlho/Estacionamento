const database = require('../config/mysqlConnection');

const createOcupacao = (ocupacao) => {
	return database.query(
        `insert into Ocupacao(desocupacao_id, data_entrada, UnitPrice) 
         values ('${ocupacao.desocupacao_id}', '${ocupacao.data_entrada}', '${ocupacao.UnitPrice}')
         returning *;`
    );
};

const updateOcupacao = (ocupacao, id) => {
	return database.query(
        `update "Ocupacao"
         set data_entrada = '${ocupacao.data_entrada}',
         UnitPrice = '${ocupacao.UnitPrice}'
         where desocupacao_id = ${id}
         returning *;`
    );
};

const deleteOcupacao = async (id) => {
    await database.query(
        `delete from "Ocupacao"
         where desocupacao_id = ${id};`
    );
	return database.query(
        `delete from "Ocupacao"
         where desocupacao_id = ${id};`
    );
};

const getOcupacao = async (id) => {
	const ocupacao = await database.query(
        `select data_entrada, UnitPrice, desocupacao_id
         from Ocupacao
         where desocupacao_id = ${id};`
    );

    return ocupacao;
};

module.exports = {
    createOcupacao,
    updateOcupacao,
    deleteOcupacao,
    getOcupacao,
};