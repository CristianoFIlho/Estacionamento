const database = require('../config/mysqlConnection');

const createDesocupacao = (desocupacao) => {
	return database.query(
        `insert into Desocupacao(desocupacao_id, Veiculo_veiculo_id, data_saida, valor_cobrado) 
         values ('${desocupacao.desocupacao_id}', '${desocupacao.veiculo_id}', '${desocupacao.data_saida}', '${desocupacao.valor_cobrado}')
         returning *;`
    );
};

const updateDesocupacao = (desocupacao, id) => {
	return database.query(
        `update Desocupacao
         set Veiculo_veiculo_id = '${desocupacao.veiculo_id}',
         data_saida = '${desocupacao.data_saida}',
         valor_cobrado = '${desocupacao.valor_cobrado}'
         where desocupacao_id = ${id}
         returning *;`
    );
};

const deleteDesocupacao = async (id) => {
    await database.query(
        `delete from Desocupacao
         where desocupacao_id = ${id};`
    );
	return database.query(
        `delete from Desocupacao
         where desocupacao_id = ${id};`
    );
};

const getDesocupacao = async (id) => {
	const desocupacao = await database.query(
        `select Veiculo_veiculo_id, data_saida, valor_cobrado, desocupacao_id
         from Desocupacao
         where desocupacao_id = ${id};`
    );

    return desocupacao;
};

module.exports = {
    createDesocupacao,
    updateDesocupacao,
    deleteDesocupacao,
    getDesocupacao,
};