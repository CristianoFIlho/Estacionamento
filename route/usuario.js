const express = require('express');
const service = require('../service/usuario');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', async function (req, res) {
    try{
        const body = req.body;
        if (!(body.id_usuario && body.telefone_func && body.tipo_perfil && body.login && body.senha && body.mat_func)) {
            throw({ detail: "Data not formatted properly", code: 'No code' });
        }
        const usuario = await service.createUsuario(body);
        res.json(usuario[0]);
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
        const usuario = await service.getUsuario(id);
        res.json(usuario);
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
        const usuario = await service.updateUsuario(body, id);
        res.json(usuario[0]);
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
        await service.deleteUsuario(id);
        res.json({message: 'Successful usuario deleted'});
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

module.exports = app;