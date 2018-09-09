function groupAnimals(animals) {
    var arrayTemp = []
    var arrayFinal = []

    for (var i = 0; i < animals.length; i++) {
        var isSame = false
        var index = 0
        for (var j = 0; j < arrayTemp.length; j++) {
            if (animals[i][0] === arrayTemp[j]) {
                isSame = true
                index = j
            }
        }
        if (isSame == false) {
            arrayTemp.push(animals[i][0])
            arrayFinal.push([animals[i]])
        } else {
            arrayFinal[index].push(animals[i])
        }
    }
    return arrayFinal.sort(function (a, b) { return a > b })
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]