

// /**
//  * 1. mencari dari input array... outputnya berupa array yang bisa dibagi oleh num
//  * 2. Berarti kan, bagaimana caranya agar dari array parameter ini, bisa diolah agar
//  *    2a. array parameter/inputnya bisa berjalan
//  *    2b. memenuhi kondisi dari soal yang dikerjakan yaitu array yang habis dibagi oleh num
//  * 3. Tidak bisa looping, berarti agar function bisa terus berjalan, variabel apa yang harus dikurang/tambah?
//  * 4. Jawabannya variabel parameter.. jadi
//  *    4a. Jalankan function.. --> lakukan tugas dari fungsi (cek bisa dibagi num) --> modifikasi parameter untuk direturn rekursif
//  *    4b. Di function ini, parameter dimodifikasi dengan slice...
//  * 5. kira2 begini... kalao saya yang buat
//  */

// function dividableRecursive(array, num) {
//     if (array.length === 0) {
//         return ""
//     } else {
//         if (array[0] % num === 0) {
//             return array[0] + " " + dividableRecursive(array.slice(1), num)
//         } else {
//             return '' + dividableRecursive(array.slice(1), num)
//         }
//     }

// }

// // DRIVER CODE
// console.log(dividableRecursive([66 , 33 , 55 , 44 , 11], 3)) // 66 33
// console.log(dividableRecursive([123, 222, 100, 50, 32], 2)) // 222 100 50 32
//   console.log(dividableRecursive([125 , 500 , 201 , 202 , 66], 5)) // 125 500
//   console.log(dividableRecursive([66 , 33 , 55 , 44 , 132], 6)) // 66 132

  var string = 'Walaupun 12 regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi));
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]