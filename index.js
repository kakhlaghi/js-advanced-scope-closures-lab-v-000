function produceDrivingRange(blockRange){
  return function(blockStart, blockEnd){
    let start = parseInt(blockStart);
    let end = parseInt(blockEnd);
    let distance = Math.abs(start-end);
    let rangeCheck = blockRange - distance;

    if (rangeCheck > 0){
      return true
    } else {
      return `${Math.abs(rangeCheck)} blocks out of range`
    }
  }
}
