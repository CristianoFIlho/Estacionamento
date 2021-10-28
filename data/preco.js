const database = require('../config/mysqlConnection');

const createPreco = (preco) => {
	return database.query(
        `insert into Preco(idPreco, Data_Inicial, Cliente_cliente_id, preco_cobrado) 
         values ('${preco.idPreco}', '${preco.data_inicial}', '${preco.cliente_cliente_id}', '${preco.preco_cobrado}')
         returning *;`
    );
};

const updatePreco = (preco, id) => {
	return database.query(
        `update "Preco"
         set "Data_Inicial" = '${preco.data_inicial}',
         Cliente_cliente_id = '${preco.cliente_cliente_id}',
         preco_cobrado = '${preco.preco_cobrado}'
         where idPreco = ${id}
         returning *;`
    );
};

const deletePreco = async (id) => {
    await database.query(
        `delete from "Preco"
         where idPreco = ${id};`
    );
	return database.query(
        `delete from "Preco"
         where idPreco = ${id};`
    );
};

const getPreco = async (id) => {
	const Preco = await database.query(
        `select Data_Inicial, Cliente_cliente_id, preco_cobrado, idPreco
         from Preco
         where idPreco = ${id};`
    );

    return Preco;
};

module.exports = {
    createPreco,
    updatePreco,
    deletePreco,
    getPreco,
};