//Built in methods that take a function as an argument
//take in an array

//
// function multiplyBy2(array) {
//   // const result = []
//   // for (var i = 0; i < array.length; i++) {
//   //   //do something
//   //   const value = array[i]*2
//   //   //push something into result array
//   //   result.push(value)
//   // }
//   // return result
//
//   return array.map(function(number) {
//     return number *2
//   })
//
// }
//
// const result = multiplyBy2([2, 5, 6, 7, 9])//input

//take in array of numbers return new array w/ only even numbers
// function onlyEven(array) {
//   //define accumlator
//   const onlyEvens = []
//   //iterate over input array
//   for (var i = 0; i < array.length; i++) {
//     //decide if we should push
//     const number = array[i]
//     //is it even
//     if (number % 2 === 0) {
//       onlyEvens.push(number)
//     }
//   }
//   //return accumulator
// return onlyEvens
// }
//
// return array.filter(function(number){
//   return number % 2 === 0
// })
// }


// var result = onlyEven([2,7, 4, 8, 9, 1, 3, 22])
// console.log(result);
//take input array
//return the sum of all values in the array
// function sum(array) {
//   //define accumlator
//   var result = 0
//   //iterate over the array
//   for (var i = 0; i < array.length; i++) {
//     const number = array[i]
//     result += number
//   }
//   //return the accumulator
//   return result


  return array.reduce(function(result, number) {
    result = result + number
    return result

  }, 0)
}

[2,2,4,5]
