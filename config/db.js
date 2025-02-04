const mongoose = require('mongoose');
const config = require('config');
const db = async () => {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('DB connected');
    } catch (err) {
        console.error(error);
    }
};
module.exports = db;
