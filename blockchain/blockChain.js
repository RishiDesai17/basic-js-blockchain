const hash = require('object-hash');
var SHA256 = require("crypto-js/sha256");
const validator = require('./validator');
const mongoose = require('mongoose');
const Blockchain = require('../models/blockchainModel');

const TARGET_HASH = hash(156);

class BlockChain{
    constructor(){
        //this.chain = [];
        this.curr_transactions=[];
    }
    addNewBlock(prevHash,res){
        let block = {
            //index: this.chain.length+1,
            tstamp: Date.now(),
            transactions: this.curr_transactions,
            prevHash: prevHash
        };console.log(validator.proofOfwork(),TARGET_HASH);
        if(validator.proofOfwork()===TARGET_HASH){
            block.hash = hash(block)
            let newBlock = new Blockchain(block)
            newBlock.save().then((result)=>{
                //this.chain.push(result);
                this.curr_transactions=[];
                console.log(result)
                res.json({message:"success",block})
                return block;
            }).catch((err)=>{
                console.log(err);
                res.json({error: err})
                return err;
            })
        }
        
    }
    addNewTransaction(sender,recipient,amount){
        this.curr_transactions.push({sender,recipient,amount});
    }
}
module.exports = BlockChain;