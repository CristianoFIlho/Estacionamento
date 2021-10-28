const express = require('express');
const app = express();
const port = 5001;

const dotenv = require('dotenv');
dotenv.config();

app.use('/cliente', require('./route/cliente'));
app.use('/desocupacao', require('./route/desocupacao'));
app.use('/ocorrencia', require('./route/ocorrencia'));
app.use('/ocupacao', require('./route/ocupacao'));
app.use('/preco', require('./route/preco'));
app.use('/usuario', require('./route/usuario'));
app.use('/vaga', require('./route/vaga'));
app.use('/veiculo', require('./route/veiculo'));


if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;