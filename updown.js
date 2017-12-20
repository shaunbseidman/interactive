//declare empty array (results)
//loop through the array
// if statement to see if its higher lower or even
//add to our result array up or down
//log resutls

var numbers = [6,3,5,4,3,4,4,5]
var result = []
for (var i = 0; i < numbers.length -1; i++) {
  if (numbers[i + 1]> numbers[i]) {
    console.log('up')
  }
  else if (numbers [i+1]===numbers[i]) {
    console.log('even')
  } else{
    console.log('down')
  }
}

console.log(result);
