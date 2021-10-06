//use acse 2
let number  = 10;
let arr =[]
for(let i=0;i<number;i++){
    let num = Math.round(Math.random() * 899 + 100);
    arr.push(num)
}
arr.sort()
console.log("2nd Minimum number: "+arr[1]+" 2nd Maximum Number is: "+arr[arr.length-2]);