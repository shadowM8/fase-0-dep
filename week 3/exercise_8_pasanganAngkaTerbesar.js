/**
 * untuk mencari pasangan angka terbesar dari kumpulan angka bertipe number ini
 * 1. dari sekumpulan angka ini, pilih angka indeks 1 dan angka indeks 2 sebut var a
 * 2. lalu pilih angka indeks 2 dan angka indeks 3 sebut var b
 * 3. bandingkan var a dengan var b, mana yang lebih besar
 * 4. misalkan var a lebih besar dr b, maka var a akan dibandingkan dengan var b yang baru
 * 5. var b yang baru yaitu indeks 3 dan 4
 * 6. ulangi langkah 2 - 5
 * 
 */


function pasanganTerbesar(num) {
    // you can only write your code here!
    var temp = ''    
    var num = num + ''
    var nilaiBanding = num[0] + num[1] // nilaiBanding awal harus diberi nilai pembanding dan di luar loop
    for (var i = 1; i < num.length; i++) {
        temp = num[i] + num[i + 1]
        if (nilaiBanding < temp) {
            nilaiBanding = temp
        }
    }
    return Number(nilaiBanding)
    }
    



// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99