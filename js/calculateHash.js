var SHA256 = require("crypto-js/sha256");

var calculateHash = (index, timestamp, data, previousHash) => {
  return SHA256(index + timestamp + data + previousHash).toString();
}
