//this makes no sense , since typeof is already a function that returns type but oh well.
function giveType(x) {
  return typeof(x);
}

console.log(giveType(3449));
console.log(giveType("Hello"));
console.log(giveType(true));