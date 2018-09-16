/**
 * 
 * 1. Cari panjang string dari num, sebagai limit looping
 * 2. Lakukan looping yang didalamnya untuk
 *  2a. mengecek apakah ada huruf a atau tidak
 *      2a.a. Jika ada huruf a, cek apakah ada huruf b atau tidak dengan looping num lagi dari indeks huruf a sampai panjang num
 *             2a.a.a.Jika indeks huruf b - indeks huruf a <= 3 return TRUE
 *             2a.a.b.Selain itu false
 */


function checkAB(num) {
    // you can only write your code here!
    var selisih = 0
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {            
            for (var j = i; j < num.length; j++) {
                if (num[j] === 'b') {
                    selisih = j - i
                }
            }
        } else if (num[i] === 'b'){
            for (var j = i; j < num.length; j++) {
                if (num[j] === 'a') {
                    selisih = j - i
                }
            }
        }      
    }
    if (selisih === 4) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false