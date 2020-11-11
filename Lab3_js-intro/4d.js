function sortAlphabetical (x){
    // split into array , sort , join back to string , then compare
   return x.split("").sort().join("");
}

console.log(sortAlphabetical("webmaster"));

