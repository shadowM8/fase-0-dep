console.log('==soal 7589==')
var angka = 7589
var angkaString = angka + ''

// for (var i = 0; i < angkaString.length; i++) {
//     console.log(angkaString[i] + " tipe datanya " + typeof angkaString[i])
// }
console.log('==mencari digit terkecil dari number ==')
var angkaArray = angkaString.split("")
// console.log(angkaArray)cek apakah angkaArray udah jadi array
var angkaTerkecil = angkaArray[0]
for (var j = 0; j <angkaArray.length; j++) {
    if (angkaArray[j] < angkaTerkecil) {
        angkaTerkecil = angkaArray[j]
    }
}
console.log(angkaTerkecil)
// var angkaArray = angka.sort(function (a, b) { return a - b })
// console.log(angkaArray)

// console.log('==soal kaki==')
// var kata = "kaki"
// var temp = ''
// // var x = 0
// for (var x = 0; x < 2; x++) {
//     console.log(kata[x])
// }
// for (x; x < kata.length; x++) {
//     temp = temp + kata[x]
// }
// console.log(temp)


//Josephus problem
/**
 * Tujuan dari problem Josephus, yaitu mencari return nilai yang survive dari n-orang
 * dan k adalah jumlah skip sebelum membunuh?
 * 
 * 1. orang yang mengikuti sebanyak 1 sampai n orang
 */
