// var arr = [2,4,6]
// console.log(arr[0])
// var arrZ = []
// arrZ.push(arr[0])
// console.log(arrZ)

// var animals = ['cacing', 'ayam', 'kuda', 'anoa', 'kancil']

// console.log(animals.sort())

// animals.push(['babi'])
// console.log(animals)
// animals[5].push(['biawak'])
// console.log(animals)

arr = [1, 5, 10, 16, 23, 31, 40, 50, 61]

var selisihDeret = arr.slice(-1).pop() - arr.slice(-2, -1).pop()
// console.log(arr.pop())
console.log(arr.slice(-1))
console.log(arr.slice(-1).pop())
console.log(arr.slice(-3,-1))
console.log(arr.slice(-3,-1).shift())
console.log(selisihDeret)
console.log(arr.slice(0))

