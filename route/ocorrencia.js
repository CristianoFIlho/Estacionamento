const express = require('express');
const service = require('../service/ocorrencia');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', async function (req, res) {
    try{
        const body = req.body;
        if (!(body.id_ocorencia && body.OrderNumber && body.last_update && body.OrderDate && body.tipo_ocorrencia && body.usuario_id_usuario)) {
            throw({ detail: "Data not formatted properly", code: 'No code' });
        }
        const ocorrencia = await service.createOcorrencia(body);
        res.json(ocorrencia[0]);
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

app.get('/:id', async function (req, res) {
    try{
        const id = req.params.id;
        const ocorrencia = await service.getOcorrencia(id);
        res.json(ocorrencia);
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

app.put('/:id', async function (req, res) {
    try{
        const id = req.params.id;
        const body = req.body;
        if (!(body.nome && body.rg)) {
            throw({ detail: "Data not formatted properly", code: 'No code' });
        }
        const ocorrencia = await service.updateOcorrencia(body, id);
        res.json(ocorrencia[0]);
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

app.delete('/:id', async function (req, res) {
    try{
        const id = req.params.id;
        await service.deleteOcorrencia(id);
        res.json({message: 'Successful Ocorrencia deleted'});
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

module.exports = app;