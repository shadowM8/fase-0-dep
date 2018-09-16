/**
 * Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
 * 
 * 1. Jadi pertama cari panjang dari string str dengan .length
 * 2. Kemudian bandingkan antara string indeks 1 dengan string indeks sebelahnya, string yang lebih kecil akan diletakkan di sebelah kiri dari string yang lebih besar
 */

function urutkanAbjad(str) {
    // you can only write your code here!
    var hasil = str.split('').sort(function (a, b) { return a > b }).join('')
    return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'