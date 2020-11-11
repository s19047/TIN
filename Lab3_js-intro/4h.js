function secondFinder(x) {
  let sorted = x.sort();
  return [x[1],x[x.length-1]];
}

x = [1,7,17,9,2,3,0]

console.log(secondFinder(x))