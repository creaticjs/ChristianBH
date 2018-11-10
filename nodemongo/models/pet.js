const mongose = require('mongoose');

const Schema = mongose.Schema;

const petSchema = new Schema({
    nombre : { type : String },
    tipo : { type : String }
})


module.exports = mongose.model('Pet',petSchema);