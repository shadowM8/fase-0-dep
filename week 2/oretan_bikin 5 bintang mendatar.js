// var rows1 = 5;
// var asterisk = '';
// while (rows1 >0) {
//     asterisk = asterisk + '*'
//     console.log(asterisk) // tampilkan disini jika ingin 5 kali
//     rows1 = rows1 - 1
// }

var tahun = 2000;

if (tahun % 4 === 0 && tahun % 100 !== 0) {
    console.log("Tahun Kabisat")
} else if (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0) {
    console.log("Tahun Kabisat juga")
} else {
    console.log("Bukan tahun kabisat")
}
