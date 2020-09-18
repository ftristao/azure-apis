const createMongoClient = require('../shared/database');

module.exports = async function (context, req) {
    const {
        client: MongoClient,
        closeConnectionFn
    } = await createMongoClient();
    const Frases = MongoClient.collection('frases');
    const res = await Frases.find({});
    const body = await res.toArray();

    closeConnectionFn();

    context.res = {
        status: 200,
        body,
    };
};