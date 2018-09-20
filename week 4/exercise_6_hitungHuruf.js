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
    var arrayKataTemp = '-1'    

    for (var i = 0; i < arrayKataSplit.length; i++) {
        for (var j = 0; j < arrayKataSplit[i].length;j++){
            arrayKataTemp = arrayKataSplit[i][j]
            for (var k = j+1; k < arrayKataSplit[i].length;k++){
                if (arrayKataTemp === arrayKataSplit[i][k]){
                    return arrayKataSplit[i]
                }
            }
        }
        
        
    }
    return arrayKataTemp


}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau