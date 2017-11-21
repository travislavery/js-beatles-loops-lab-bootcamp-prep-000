function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (var i = 0; i < musicians.length-1; i++) {
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
    arrayLength -= 1
  }
}