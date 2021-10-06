let arr = [1,2,-3,-1,2,-4,5,6]
let found =true;
for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.lenght-1;j++){
        for(let k=j+1;k<arr.length;k++){
            if(arr[i]+arr[j]+arr[k]==0){
                console.log("Number found:"+arr[i]+" "+arr[j]+" "+arr[k])
                found=true
            }
        }
    }
    if(found == false){
        console.log("Number are not found")
    }
}