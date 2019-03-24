const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const ItemSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Must be filled']
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);