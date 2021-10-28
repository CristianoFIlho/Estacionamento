const express = require('express');
const service = require('../service/vaga');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', async function (req, res) {
    try{
        const body = req.body;
        if (!(body.setor && body.vaga_id && body.numero_id && body.Ocupacao_desocupacao_id && body.Desocupacao_desocupacao_id)) {
            throw({ detail: "Data not formatted properly", code: 'No code' });
        }
        const vaga = await service.createVaga(body);
        res.json(vaga[0]);
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
        const vaga = await service.getVaga(id);
        res.json(vaga);
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
        const vaga = await service.updateVaga(body, id);
        res.json(vaga[0]);
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
        await service.deleteVaga(id);
        res.json({message: 'Successful vaga deleted'});
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

module.exports = app;