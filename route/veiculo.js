const express = require('express');
const service = require('../service/veiculo');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', async function (req, res) {
    try{
        const body = req.body;
        if (!(body.veiculo_id && body.ocorrencia_id_ocorencia)) {
            throw({ detail: "Data not formatted properly", code: 'No code' });
        }
        const veiculo = await service.createVeiculo(body);
        res.json(veiculo[0]);
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
        const veiculo = await service.getVeiculo(id);
        res.json(veiculo);
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
        const veiculo = await service.updateVeiculo(body, id);
        res.json(veiculo[0]);
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
        await service.deleteVeiculo(id);
        res.json({message: 'Successful veiculo deleted'});
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

module.exports = app;