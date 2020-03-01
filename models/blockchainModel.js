const mongoose = require('mongoose');

const blockChainSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    tstamp:{
        required:true,
        type: mongoose.Schema.Types.Date,
        default: Date.now()
    },
    transactions:{
        required: true,
        type: mongoose.Schema.Types.Array
    },
    prevHash: String,
    hash: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('BlockChain',blockChainSchema);