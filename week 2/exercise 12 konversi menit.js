function konversiMenit(menit) {
    // you can only write your code here!
    // setiap kali menit > 60, maka angka depan jadi 1
    // 63 % 60 
    var menitBaru = ""
    var detikBaru = ""
    // var hasilKonversi = menitBaru+":"+detikBaru
    menitBaru = menit / 60
    detikBaru = menit % 60

    if (detikBaru < 10 && detikBaru <= 30) {
        menitBaru = Math.floor(menitBaru)
        return menitBaru+":0"+detikBaru
    } else if (detikBaru >= 10 && detikBaru <= 30) {
        menitBaru = Math.floor(menitBaru)
        return menitBaru+":"+detikBaru
    } else if (detikBaru >= 10 && detikBaru > 30) {
        menitBaru = Math.floor(menitBaru)
        return menitBaru+":"+detikBaru
    } else {
        return "data yang anda masukkan kurang tepat"
    }
    
    
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00