// ada 2 case

// case pertama

// pengennya, misal number dimasukkan 12

// maka hasilnya adalah 22

// 12 --> cek --> bukan palindrome --> num + 1 
// 13 --> cek --> bukan palindrome --> num + 1
// ....
// 22 --> cek --> palindrome --> tampilkan hasil

// case kedua

// num = 22

// 22 --> cek --> palindrome --> num + 1
// 23 --> cek --> bukan palindrome --> num + 1
// ...
// 33 --> cek --> palindrome --> tampilkan hasil

function angkaPalindrome(num) {
    //code balikan
    num = num + '' //mengubah tipe data number menjadi string
    var temp = ''
    for (var i = num.length - 1; i >= 0; i--) {
        temp = temp + num[i]
    }
    //didapatkan var temp = balikan dari num

    nextNum = Number(num) + 1
    nextNum = nextNum + ''
    var nextTemp = ''
    for (var j = nextNum.length - 1; j >= 0; j--) {
        nextTemp = nextTemp + nextNum[j]
    }
    return nextTemp

}
console.log(angkaPalindrome(22))