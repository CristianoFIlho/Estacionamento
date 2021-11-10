const { getVeiculos, postVeiculos } = require('./database');
module.exports = function(app){
    app.get("/veiculos", async (req, res) => {
        const veiculos = await getVeiculos();
        res.json(veiculos);
    });
    
    app.post("/veiculos", async (req, res) => {
        console.log(req.body);
        const veiculos = await postVeiculos(req.body);
        res.json(veiculos);
    });
}
