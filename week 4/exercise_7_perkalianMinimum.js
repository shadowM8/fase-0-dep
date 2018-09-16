/**
 * 
 * 1. Pertama, cari perkalian yang hasilnya adalah angka parameter
 * 2. Berarti cari faktor dari angka parameter, atau yang bisa membagi habis angka parameter
 */

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = []
    var pasanganFaktor = 0
    var arrayPasangan = []
    var faktorDanPasangan = []
    var pembanding = 5
    var index = 0
    for (var i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(i)
            pasanganFaktor = angka / i
            arrayPasangan.push(pasanganFaktor)
            faktorDanPasangan.push(String(i) + String(pasanganFaktor))
        }
    }
    while (faktorDanPasangan.length > 1) {
        if (faktorDanPasangan[0].length < faktorDanPasangan[faktorDanPasangan.length - 1].length) {
            faktorDanPasangan.pop()
        } else {
            faktorDanPasangan.shift()
        }
    }    
    hasil = faktorDanPasangan[0].length
    return hasil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2