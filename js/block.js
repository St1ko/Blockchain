var SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data) {
    this.index = 0;
    this.timestamp = new Date().getTime() / 1000;
    this.data = data;
    this.previousHash = "0";
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.index + this.timestamp + this.data + this.previousHash).toString();
  }

  mineBlock(difficulty) {
  }

}

module.exports = Block;
