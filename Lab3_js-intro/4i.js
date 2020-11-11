function coinGen(x) {
  let amount = x[0];
  let sorted = x[1].sort((a, b) => b - a);
  let coins = [];
  let i = 0;
  while(i < sorted.length){
    if(amount-sorted[i]>=0){
      coins.push(sorted[i])
      amount = amount - sorted[i];
    }else{
      i++;
    }
  }
  return coins;

}

x = [46,[25,10,5,2,1]]

console.log(coinGen(x))