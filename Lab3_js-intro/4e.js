function longestWord (x){
    var regex = /\s/g;
    let stringArr =  x.split(regex);
    let max = 0;
    let word = "";
    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i].length > max){
            max = stringArr[i].length;
            word = stringArr[i];
        }
    }

    return word;
}

console.log(longestWord("webmaster hello hey"));

