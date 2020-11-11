function binary(x,arr) {
  //sort
  let sorted = arr.sort((a, b) => a - b);
  
    let start=0, end=arr.length-1; 
    while (start<=end){ 
        let mid=Math.floor((start + end)/2); 
    
        //if mid is the number , return it other wise change to appropriate half
        if(arr[mid]===x) 
          return "number is in the list"; 
        else if (arr[mid] > x) 
             end = mid - 1;  
        else
             start = mid + 1; 
    } 
   
    return "number uis not in the list"; 
} 

arr = [10,5,25,1,2,6,3,80,16]

console.log(binary(5, arr));
