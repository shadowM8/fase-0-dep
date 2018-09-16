//fungsinya  akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
// fungsi menerima satu parameter berupa string. 
// gimana caranya supaya karakter x dan o bisa dihitung secara terpisah

function xo(str) {
    // you can only write your code here!    
    var jumlahStringx = 0
    var jumlahStringo = 0
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] === 'x') {
            jumlahStringx = jumlahStringx + 1
        } else if (str[i] === 'o') {
            jumlahStringo = jumlahStringo + 1
        }
    }
    if (jumlahStringx === jumlahStringo) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true