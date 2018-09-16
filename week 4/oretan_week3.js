// var abjadBaru = 'Budi'
// var alphabet = 'abcdefghijklmnopqrstuvwxyz'
// var kata = 'Today, is the greatest day ever'

// console.log(kata.split(" "))
// var arrayKataSplit = kata.split(' ')
// console.log(arrayKataSplit[0])
// /**
//  * ask exercise 4 gimana cara ngurutin array
//  */
// //ask exercise 5 tentang tipe data abjadBaru kenapa harus []

// var number = 27

// console.log(number.toString().length)

// var arrayData = [
//     {product:'',shoppers:[],leftOver:0,totalProfit:0}
//   ]
// arrayData[0].product = 'baju'
// console.log(arrayData[1].product)

// arrNumber =[2, 8, 4, 6, 8, 5, 8, 4]
// arrNumber.sort(function (a, b) { return b - a })

// console.log(arrNumber)

// loop pesan makanan tiap 15 menit
// function pesanMakan(waktu) {
//     jumlahPesan = 0
//     for ( var i = waktu; i>=0; i = i - 15){
//         jumlahPesan = jumlahPesan + 1

//     }
//     return jumlahPesan
// }

// console.log(pesanMakan(66))

// loop tambah jumlah perdigit
// function totalDigit(angka) {
//     var angkaString = angka.toString()
//     var hasil = 0
//     for (var i = 0; i < angkaString.length; i++) {
//         hasil = hasil + angkaString[i]
//     }
//     return hasil
// }
// console.log(totalDigit(512))

var angka = 512
var z = angka.toString().split('')
console.log(z)