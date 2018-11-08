var generateNextBlock = (blockData) => {
  var previousBlock = getLatestBlock();
  var nextIndex = previousBlock.index + 1;
  var nextTimestamp = new Date().getTime() / 1000;
  var nextHash = calculateHash(nextIndex, nextTimestamp, blockData, previousBlock.hash);
  return new Block(nextIndex, nextTimestamp, blockData, previousBlock.hash, nextHash);
};
