const mongoose = require('mongoose');

const schema = mongoose.Schema({
    //vlatsnosti - atributy podnikatele
    name: { type: String, require: true },
    age: { type: Number, require: true },
    company_name: { type: String, require: true },
    money: { type: Number, require: true },
});

module.exports = mongoose.model("Podnikatel", schema);