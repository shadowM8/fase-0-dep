
function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka.toString().length == 1){
        return angka
    } else {
        var str = angka.toString()
        var potongAngka = Number(str.slice(0,-1))
        var angkaTerakhir = Number(str[str.length-1])
        return angkaTerakhir = angkaTerakhir + totalDigitRekursif(potongAngka)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5