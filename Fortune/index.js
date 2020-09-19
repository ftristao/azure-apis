const createMongoClient = require('../shared/database');

module.exports = async function (context, req) {
    const {
        client: MongoClient,
        closeConnectionFn
    } = await createMongoClient();
    const Frases = MongoClient.collection('frases');

    var count = await Frases.countDocuments();
    function rand() {
        return Math.floor(Math.random() * count);
    }
    
    const res = await Frases.find().limit(-1).skip(rand()).next();
    
    closeConnectionFn();

    context.res = {
        status: 200,
        body: res,
    };
};