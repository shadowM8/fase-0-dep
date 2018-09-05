/**Algoritma
 * 1. cari kata palindrome, kata yang jika dibalik tidak berubah
 * 2. maka, untuk mengetahui sebuah kata palindrome, kata tersebut harus dibalik(balik kata)
 * 3. maka, lakukan algoritma untuk fungsi pembalik kata
 * 4. cek, jika hasil balik kata === kata awal, maka kata tersebut palindrome.
 * 
 */
function palindrome(kata) {
  // you can only write your code here!
  var temp = ""
  for (var i = kata.length - 1; i >= 0; i--) {
    temp = temp + kata[i]
  }
  if (temp === kata) {
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false