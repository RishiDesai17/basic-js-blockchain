const express = require('express');
const router = express.Router();
const BlockChain = require('../blockchain/blockChain');
const Blockchain = require('../models/blockchainModel');

router.post("/",async(req,res)=>{
    let blockChain = new BlockChain();
    blockChain.addNewTransaction(req.body.from,req.body.to,req.body.money);
    const response = await Blockchain.findOne().sort({_id: -1})
    console.log(response)
    if(response!==null){
        blockChain.addNewBlock(response.hash,res)
    }
    else{
        blockChain.addNewBlock(null,res)
    }
})

module.exports=router;