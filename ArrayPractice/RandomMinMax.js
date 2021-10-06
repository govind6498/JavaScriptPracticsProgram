//Use case 1.a 
//Use case 1.b
let number  = 10;
let arr =[]
for(let i=0;i<number;i++){
    let num = Math.round(Math.random() * 899 + 100);
    arr.push(num)
}
//use case 1.c
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[i+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log("2nd Minimum number: "+arr[1]+" 2nd Maximum Number is: "+arr[arr.length-2]);
