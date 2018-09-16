/**
 * 
 * syarat bilangan prima :
 * 1. lebih besar dari 1
 * 2. hanya bisa dibagi oleh angka itu sendiri, tidak bisa dibagi bilangan lain
 * 3. jika dia sampai bisa dibagi habis oleh angka lain return false
 */

function angkaPrima(angka) {
    // you can only write your code here!

    for (var i = 2; i < angka; i++) {
        var isPrima = true
        if (angka % i === 0) {
            isPrima = false
            break
        }        
    }
    if (isPrima) {
        return true
    } else {
        return false
    }
}


// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false