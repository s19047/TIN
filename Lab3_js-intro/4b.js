
/*  0 1 2 3 4 5 6 7 
    0 1 1 2 3 5 8 13  */ 

function fibo (x){
    if(x<=1)
        return x;

    let num1 = 0;
    let num2 = 1;
    for(let i = 0; i < x-2; i++){
        let temp = num2;
        num2 += num1;
        num1 = temp;
    }
    return num1+num2;
}

console.log(fibo(7))

