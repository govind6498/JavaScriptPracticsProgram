let number = 100;
let storeArr = new Array()
for(let i=1;i<number;i++){
    let num = i;
    if(num.toString().length==2){
        rem = num%10;
        rem2 = parseInt(num/10);
        if(rem == rem2){
            storeArr.push(num)
        }
    }
}
console.log(storeArr)