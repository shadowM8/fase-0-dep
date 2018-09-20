// Competencies: Loopings
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

// SKELETON CODE (Code Sample)

console.log('contoh 1')
var max = 4; // isi dengan nilai max!

while (max > 0) {
    var counter = 4
    var deret = 5
    var deretString = ''
    while (counter > 0 && deret > 2 ) {
        deret = deret - 2
        deretString = deretString + String(deret)
        counter = counter - 1        
    }
    max = max - 1
    console.log(deretString)
    }
console.log('contoh 2')
var max = 5; // isi dengan nilai max!

while (max > 0) {
    var counter = 6
    var deret = 7
    var deretString = ''
    while (counter > 0 && deret > 2 ) {
        deret = deret - 2
        deretString = deretString + String(deret)
        counter = counter - 1        
    }
    max = max - 1
    console.log(deretString)
    }
console.log('contoh 3')
var max = 10; // isi dengan nilai max!

    while (max > 0) {
        var counter = 10
        var deret = 11
        var deretString = ''
        while (counter > 0 && deret > 2 ) {
            deret = deret - 2
            deretString = deretString + String(deret)
            counter = counter - 1        
        }
        max = max - 1
        console.log(deretString)
        }