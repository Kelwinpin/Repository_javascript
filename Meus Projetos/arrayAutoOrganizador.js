const array = [1, 2, 3, 5]

function addAndOrganize(num){
    for(let i = 0;i < array.length;i++){
        if(num > array[i] && num < array[i + 1]){
            array.splice(i + 1,0,num)
            return array
        }else if(num > array[array.length - 1]){
            array.push(num)
            return array 
        }else if(num < array[0]){
            array.splice(0,0,num)
            return array
        }
    }    
        return 'Número já existente'
}

console.log(addAndOrganize(4))
console.log(addAndOrganize(7))
console.log(addAndOrganize(6))
console.log(addAndOrganize(4))
console.log(addAndOrganize(-1))