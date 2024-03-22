const mongoose = require('mongoose');

const schema = mongoose.Schema({
    //vlatsnosti - atributy uzivatele
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    age: { type: Number, require: true },
    color: { type: String, require: true },
});

module.exports = mongoose.model("Student", schema);