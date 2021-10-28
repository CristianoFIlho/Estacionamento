const database = require('../config/mysqlConnection');

const createOcorrencia = (ocorrencia) => {
	return database.query(
        `insert into Ocorrencia(id_ocorrencia, OrderNumber, last_update, OrderDate, tipo_ocorrencia, usuario_id_usuario) 
         values ('${ocorrencia.id_ocorrencia}', '${ocorrencia.OrderNumber}', '${ocorrencia.last_update}', 
         '${ocorrencia.OrderDate}', '${ocorrencia.tipo_ocorrencia}', '${ocorrencia.usuario_id_usuario}'
         )
         returning *;`
    );
};

const updateOcorrencia = (ocorrencia, id) => {
	return database.query(
        `update "Ocorrencia"
         set OrderNumber = '${ocorrencia.OrderNumber}',
         last_update = '${ocorrencia.last_update}',
         OrderDate = '${ocorrencia.OrderDate}',
         tipo_ocorrencia = '${ocorrencia.tipo_ocorrencia}',
         usuario_id_usuario = '${ocorrencia.usuario_id_usuario}'
         where id_ocorrencia = ${id}
         returning *;`
    );
};

const deleteOcorrencia = async (id) => {
    await database.query(
        `delete from "Ocorrencia"
         where id_ocorrencia = ${id};`
    );
	return database.query(
        `delete from "Ocorrencia"
         where id_ocorrencia = ${id};`
    );
};

const getOcorrencia = async (id) => {
	const Ocorrencia = await database.query(
        `select OrderNumber, last_update, OrderDate, tipo_ocorrencia, usuario_id_usuario, id_ocorrencia
         from Ocorrencia
         where id_ocorrencia = ${id};`
    );

    return Ocorrencia;
};

module.exports = {
    createOcorrencia,
    updateOcorrencia,
    deleteOcorrencia,
    getOcorrencia,
};