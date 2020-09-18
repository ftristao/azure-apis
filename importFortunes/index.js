const createMongoClient = require('../shared/database');

module.exports = async function (context, req) {
  
    const frases = req.body;
    const chave  = req.params.chave;

    const {
        client: MongoClient,
        closeConnectionFn
    } = await createMongoClient();

    const Frases = MongoClient.collection('frases');

    const res = await Frases.insertMany(frases);
    
    closeConnectionFn();

    context.res = {
        status: 200,
        body: res
    };
};