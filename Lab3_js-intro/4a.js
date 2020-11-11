function factorialRecursive (x){
    if(x == 0)
        return 1;

    return x*factorialRecursive(--x);
}

function factorialIterative (x){
    let ans = 1;
    while(x > 0)
        ans *= x-- 
    
    return ans;
}

console.log(factorialRecursive(4))
console.log(factorialIterative(4))
