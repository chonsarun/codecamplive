let num = [0,9,1,8,2,7,3,6,4,5]
let size = num.length;
let checknum;

do{
    checknum = false
    for(let i = 1;i<=size-1;i++){
        if(num[i-1]>num[i]){
            let temp = num[i-1]
            num[i-1] = num[i]
            num[i] = temp
            checknum = true
            console.log(num)
        }
    }
}while(checknum)