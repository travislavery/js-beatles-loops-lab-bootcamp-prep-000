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
    empty.push(nextString)
    arrayLength -= 1
  }
  return empty
}

function iLoveTheBeatles(number) {
  var empty = []
  var parameter = 15
  do {
    empty.push('I love the Beatles!')
    parameter -= 1
  } while (parameter > 0)
  return empty
}