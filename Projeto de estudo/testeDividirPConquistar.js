const array1 = [15, 25, 30, 45, 50]
const array2 = [20, 22, 28, 33, 35, 40]
let arrayFinal = []

let j = 0
let pos = 0

for(let i = 0;i < 11;i++){

    if(array1[pos] == undefined){
        arrayFinal.push(array2[j])
        j++
    }else if(array2[j] == undefined){
        arrayFinal.push(array1[pos])
        pos++  
    }else{
        if(array1[pos] < array2[j]){
            arrayFinal.push(array1[pos])
            pos++
        }else{
            arrayFinal.push(array2[j])
            j++
        }
    }
    
}

console.log(arrayFinal)