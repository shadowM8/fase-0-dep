/**
 * algoritma untuk menghitung jumlah kata dalam kalimat
 * 1. pisahkan kata kata dalam kalimat yang akan dijadikan parameter kedalam nilai tersendiri
 * 2. hitung jumlah kata
 * 
 */

function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var temp = kalimat.split(' ') // karena kalimat dipisahkan oleh spasi
    return temp.length
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5