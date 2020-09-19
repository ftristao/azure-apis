const createMongoClient = require('../shared/database');

module.exports = async function (context, req) {
  
    if (req.headers.chave_limpeza.equals("LIMPEZA_TOTAL")) {

        const {
            client: MongoClient,
            closeConnectionFn
        } = await createMongoClient();

        const Frases = MongoClient.collection('frases');

        const res = await Frases.deleteMany({});
        
        closeConnectionFn();

        context.res = {
            status: 200,
            body: res
        };
    } else {
        context.res = {
            status: 401,
            body: "[]"
        };
    }
};