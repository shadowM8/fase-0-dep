var nama = "Antonius"

//var namaBaru = ""
for (var i = 0; i < nama.length; i++) {
    console.log(nama[i])
}
console.log("loop pertama pakai while")
var i = 0
while (i < nama.length) {
    console.log(nama[i])
    i++
}
console.log("loop ke 2")
for (var i = 1; i < nama.length; i++) {
    if (i % 2 !== 0) {
        console.log(nama[i])
    } else {
        // console.log('')
    }
}
console.log("loop ke 2 pake while")
var j = 1
while (j < nama.length) {
    if (j % 2 !== 0) {
        console.log(nama[j])
    } else { }
    j++
}
console.log("loop ke 3")
for (var i = 7; i > 0; i--) {
    if (i % 2 !== 0) {
        console.log(nama[i])
    } else {
        // console.log('')
    }
}
console.log("loop ke 3 pake while")
var k = 7
while (k > 0) {
    if (k % 2 !== 0) {
        console.log(nama[k])
    } else { }
    k--
}
var deret = ''
console.log("loop ke 3 mendatar")
for (var m = 7; m > 0; m--) {
    if (m % 2 !== 0) {
        deret = deret + nama[m]
    } else {
        // console.log('')
    }
}
console.log(deret)