/**
 * 1. Mencari faktor persekutuan terbesar dari 2 angka parameter
 * 2. FPB adalah angka terbesar yang dapat membagi habis sebuah angka parameter
 * 3. Jadi mencari FPB 2 parameter, berarti mencari angka berapa yang jika dikalkulasikan dengan rumus parameter % angka ===0
 * 
 */

function fpb(angka1, angka2) {
    // you can only write your code here!
    var faktorAngka1 = []
    var faktorAngka2 = []
    var faktorPersekutuan = []
    for (var i = 0; i <= angka1; i++) {
        if (angka1 % i === 0) {
            faktorAngka1.push(i)
        }
    }
    for (var j = 0; j <= angka2; j++) {
        if (angka2 % j === 0) {
            faktorAngka2.push(j)
        }
    }
    for (var a = 0; a < faktorAngka1.length; a++) {
        var isSame = false
        for (var b = 0; b < faktorAngka2.length; b++) {
            if (faktorAngka1[a] === faktorAngka2[b]) {
                isSame = true
            }
        }
        if (isSame === true) {
            faktorPersekutuan.push(faktorAngka1[a])
        }
    }
    faktorPersekutuan.sort(function (a, b) { return b - a })

    return faktorPersekutuan[0]
}

// TEST CASES
console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1