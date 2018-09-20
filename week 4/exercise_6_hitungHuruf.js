/**
 * 
 * 1. Pertama, tentukan jumlah kata dalam satu variabel string
 * 2. Dengan menggunakan split lalu tentukan panjang(length) dari variabel string
 * 3. Masukkan array tersebut ke dalam variabel array baru
 * 4. dari variabel array ini, lakukan looping sebanyak panjang array baru atau sejumlah kata
 */


function hitungHuruf(kata) {
    // you can only write your code here!
    var arrayKataSplit = kata.split(' ')
    var hasil = arrayKataSplit[0]
    var counterHasil = 0

    for (var i = 0; i < arrayKataSplit.length; i++) { //looping kata
        var arrayCounter = []

        for (var j = 0; j < arrayKataSplit[i].length; j++) { // looping huruf

            var counter = 0
            for (var k = 0; k < arrayKataSplit[i].length; k++) { // looping menghitung masing2 huruf di kata
                if (arrayKataSplit[i][j] === arrayKataSplit[i][k]) {
                    counter = counter + 1
                }
            }
            arrayCounter.push(counter)

        }
        // console.log(arrayCounter) 
        var arrayTampungCounter = 0
        for (var l = 0; l < arrayCounter.length; l++) {
            if (arrayCounter[l] >= 2) {
                arrayTampungCounter = arrayTampungCounter + 1
            }
        }
        if (arrayTampungCounter > counterHasil) {
            hasil = arrayKataSplit[i]
            counterHasil = arrayTampungCounter
        }        
    }
    return hasil

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau