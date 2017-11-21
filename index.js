function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (var i = 0; i < musicians.length; i++) {
    var nextString = `${musicians[i]} plays ${instruments[i]}`
    empty.push(nextString)
  }
  return empty
}

function johnLennonFacts(factsArray) {
  var arrayLength = factsArray.length-1
  var empty = []
  while(arrayLength >= 0) {
    var nextString = factsArray[arrayLength] + "!!!"
    empty.unshift(nextString)
    arrayLength -= 1
  }
  return empty
}

function iLoveTheBeatles(number) {
  var empty = []
  var numberCheck = number-1
  do {
    empty.push('I love the Beatles!')
    numberCheck -= 1
  } while (numberCheck >= 0)
  return empty
}