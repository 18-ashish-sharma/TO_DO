require('dotenv').config();
const { db } = process.env
module.exports.config = {
    uri: 'mongodb+srv://todo:123@cluster0.i62zo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    options: {
        dbName: 'To-Do',
        useNewUrlParser: true
    },
}