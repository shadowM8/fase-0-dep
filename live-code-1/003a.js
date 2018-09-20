// mpetencies: Loopings
/*
=================
Odd Series
=================
Instruksi
=========
Buatlah sebuah proses pengecekan dengan menggunakan looping (boleh dengan while atau for).
Disediakan variabel max, dimana akan menampilkan deret ganjil dari terbesar ke kecil hingga mencapai angka 1.
Tampilkan deret ganjil sejumlah nilai max.

contoh 1 (max = 4)
31
31
31
31

contoh 2 (max = 5)
531
531
531
531
531

contoh 3 (max = 10)
97531
97531
97531
97531
97531
97531
97531
97531
97531
97531

Ketentuan
=========
Wajib menggunakan looping!
*/

function loopingTiga(number) {
    var numberString = ''
    for (var i = 0; i < number; i++) {
        for (var j = number; j > 0; j--) {
            if (j % 2 !== 0) {
                numberString = numberString + j
            }
        }
        if (i !== number - 1) {
            numberString += '\n'
        }
    }
    return numberString


}


console.log(loopingTiga(4))
// 31
// 31
// 31
// 31
console.log(loopingTiga(5))
console.log(loopingTiga(10))