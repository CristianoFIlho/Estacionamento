const database = require('../config/mysqlConnection');

const createCliente = (cliente) => {
	return database.query(
        `insert into Cliente(cliente_id, nome, rg) 
         values ('${cliente.cliente_id}', '${cliente.nome}', '${cliente.rg}')
         returning *;`
    );
};

const updateCliente = (cliente, id) => {
	return database.query(
        `update "Cliente"
         set "nome" = '${cliente.nome}',
         rg = '${cliente.rg}'
         where cliente_id = ${id}
         returning *;`
    );
};

const deleteCliente = async (id) => {
    await database.query(
        `delete from "Cliente"
         where cliente_id = ${id};`
    );
	return database.query(
        `delete from "Cliente"
         where cliente_id = ${id};`
    );
};

const getCliente = async (id) => {
	const cliente = await database.query(
        `select nome, rg, cliente_id
         from Cliente
         where cliente_id = ${id};`
    );

    return cliente;
};

module.exports = {
    createCliente,
    updateCliente,
    deleteCliente,
    getCliente,
};