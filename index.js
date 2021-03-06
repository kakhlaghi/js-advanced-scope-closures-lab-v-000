function produceDrivingRange(blockRange){
  return function(blockStart, blockEnd){
    let start = parseInt(blockStart);
    let end = parseInt(blockEnd);
    let distance = Math.abs(start-end);
    let rangeCheck = blockRange - distance;

    if (rangeCheck > 0){
      return `within range by ${rangeCheck}`
    } else {
      return `${Math.abs(rangeCheck)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipDec){
  return function(bill){
    let tipAmount = bill * tipDec;
    return tipAmount
  }
}

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
