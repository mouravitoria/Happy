const dataBase = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    index(req, res){
        return res.render('index');
    },

    orfanato(req, res){
        return res.render('orfanato');
    },

    async orfanatos(req, res){
        try {
            const db = await dataBase;
            const orphanages= await db.all("SELECT * FROM orphanages")
            return res.render('orfanatos', {orphanages})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }

    },

    cadastroOrfanato(req, res){
        return res.render('cadastro-orfanato');
    }
}