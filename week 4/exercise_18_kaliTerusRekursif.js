function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka.toString().length === 1) {
        return angka
    } else {
        var str = angka.toString()
        var Split = str.split('')
        var hasilKali = 1
        for (var i= 0; i < Split.length; i++ ){
            hasilKali = hasilKali * Split[i]
        }
        return kaliTerusRekursif(hasilKali)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6