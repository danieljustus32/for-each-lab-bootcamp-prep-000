function iterativeLog(array) {
    array.forEach(array => {
      console.log(`${array - 1}: ${array}`)
    })
    debugger
}

function iterate(callback) {
  const myArray = [1, 2];
  myArray.forEach(callback)
  return myArray;
  debugger
}

function doToArray(array, callback) {
  array.forEach(callback)
}
