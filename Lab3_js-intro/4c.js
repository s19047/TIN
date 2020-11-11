function isPalindrom (x){
    if (x === "" || typeof(x)!="string")
        return "\nplease enter a valid string"

    //remove unnecessary characters so that a phrase like nurses run still shows as a palindrom
    let regex = /[^A-Za-z0-9]/g;
    let strippedPhrase = x.toLowerCase().replace(regex, '')

    // split into array , reverse , join back to string , then compare
    if(strippedPhrase === strippedPhrase.split("").reverse().join(""))
        return (`\n"${x}" is indeed a palindrom`)
    else
        return (`\n"${x}" is not a palindrom`)
}

console.log(isPalindrom("madam"))
console.log(isPalindrom("nurses run"))
console.log(isPalindrom("Ahmad"))
console.log(isPalindrom(""))
console.log(isPalindrom(4))


