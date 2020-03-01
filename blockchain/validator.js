const hash = require('object-hash')
var SHA256 = require("crypto-js/sha256");

const TARGET_HASH = hash(156);

module.exports.proofOfwork = () => {
    let proof=0;
    while(true){
        let guessHash = hash(proof);
        console.log("Hashing: ",guessHash);
        if(guessHash!==TARGET_HASH){
            proof++;
        }
        else{
            break;
        }
    }
    return hash(proof);
}