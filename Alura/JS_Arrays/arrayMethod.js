// Método concat: Contatena dois arrays 
let letras = ['a', 'b', 'c', 'd', 'e']
let letras2 = ['f', 'g', 'h', 'i', 'j', 'k']
let letras3  = letras.concat(letras2)

console.log(letras3)

// filter: Filtra elementos de um vetor que possuem uma similidade pré definida
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const divisibleBy5 =(num)=>{
    if(num % 5 === 0){
        
    }
}

let nums2 = nums.filter(divisibleBy5)
console.log(nums2)