//? array.unshift() :-insert an element into the first position of array.
//? works by iterating over the array and moving every element to the next position
//? opposite of arr.push()


//! UNSHIFT
// let arr = [1,2,3,4]

// console.log("ARR1", arr)

// arr.unshift(0)

// console.log("ARR2", arr)


//? array.shift() : remove the first element from the array
//? opposite of array.pop()

//! SHIFT


// arr.shift()
// console.log("arr", arr)

//? array.splice(index, number) to remove a number of elements from a position in the array.
//? if you want to add elements at a particular position, make second arg as 0 and the third arg 
//? as the elements that you want to insert, like: array.splice(2,0,x,y,z)


//?remove 2 elements starting from index 2

//! SPLICE

// arr.splice(2,2)
// console.log("arr", arr)

//?insert elements starting from position 1


// arr.splice(1,0,9,8,7)
// console.log("arr", arr)


//? MATRIX: two dimensional Array

//! CONCAT


// let positiveNumbers = [1,2,3,4,5]
// console.log("positiveNumbers", positiveNumbers)
// let negativeNumbers = [-5,-4,-3,-2,-1]
// console.log("negativeNumbers", negativeNumbers)

// let numbers = negativeNumbers.concat(0, positiveNumbers)
// console.log("numbers", numbers)

//! EVERY and SOME

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let arr = [{
//     a: 1,
//     b: 2
// },
// {
//     c: 2,
//     d: 3

// }]
// function isEven (x){
//     console.log(x)
//    return  x%2===0? true:false

// }

//  numbers.every(isEven)
//  numbers.some(isEven)

//  numbers.forEach( x => {
//      console.log( x%2 == 0)
//  })


