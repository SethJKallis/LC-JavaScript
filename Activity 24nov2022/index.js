let array = [4,6,8,9,11,14];
let arrayLength = array.length;

console.log(array)

console.log('Display the size of the array')
console.log(array.length)

console.log('Display the first element in the array')
console.log(array[0])

console.log('Display numbers in an even position')
for(let i = 0 ; i < arrayLength ; i += 2){
    console.log(array[i])
}
console.log('Display numbers in the array that are even numbers')
for(let i = 0; i < arrayLength; i++){
    if(array[i]%2 == 0){
        console.log(array[i])
    }
}

console.log('Check if the array includes the number 9')
console.log(array.includes(9) ? "it Does" : "It Does'nt", "Found at Position:", array.indexOf(9))
