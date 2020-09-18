const createMongoClient = require('../shared/database');

module.exports = async function (context, req) {
    const {
        client: MongoClient,
        closeConnectionFn
    } = await createMongoClient();
    const Frases = MongoClient.collection('frases');

    var count = Frases.collections.count()
    var rand = () => Math.floor(Math.random() * count);
    
    const res = await Frases.collection.find().limit(-1).skip(rand()).next();

    const body = await res.toArray();

    closeConnectionFn();

    context.res = {
        status: 200,
        body,
    };
};