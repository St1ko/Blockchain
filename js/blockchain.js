var Block = require('./block.js');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()];
  }

  createGenesis() {
    return new Block("Genesis block");
  }

  latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.index = this.chain.length;
    newBlock.previousHash = this.latestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  checkValid() {
    for(let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }

    }
    return true;
  }

}

let stikoChain = new Blockchain();
stikoChain.addBlock(new Block({balance: 10}));
stikoChain.addBlock(new Block({balance: 15}));

console.log(JSON.stringify(stikoChain, null, 4));
console.log("Is blockchain valid? " + stikoChain.checkValid());
