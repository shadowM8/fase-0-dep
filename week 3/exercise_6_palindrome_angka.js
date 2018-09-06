/**
 * function angkaPalindrome(num) akan mereturn angka selanjutnya dari num yang merupakan angka palindrome
 * algoritma
 * 1. Tentukan apa saja kriteria angka palindrome, 
 * 2. Kriteria angka palindrome, - jika dibalik urutannya, valuenya sama
 * 3. Setelah diketahui kriteria angka palindrome, berdasarkan input num, tentukan apakah num palindrome
 * 4. Jika num palindrome, return angka palindrome selanjutnya
 * 5. Jika num tidak palindrome,return angka palindrome selanjutnya...
 * 6. Jadi kesimpulannya, berdasarkan input num, tentukan angka palindrom yang lebih besar dari num
 * 7.
 * 
 */

function angkaPalindrome(num) {
    //code balikan
    var temp = 0
    while (temp != num) {
        num = Number(num) + 1
        num = num + '' //mengubah tipe data number menjadi string
        var temp = ''
        for (var i = num.length - 1; i >= 0; i--) {
            temp = temp + num[i]
        }
        //didapatkan var temp = balikan dari num
    }
    return Number(temp)

}



// console.log(angkaPalindrome(22))

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001