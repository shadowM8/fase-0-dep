function changeVocals (str) {
    //code di sini
    return str.replace(/[a,i,u,e,o,A,I,U,E,O]/g, function (x){
        return String.fromCharCode(x.charCodeAt(0)+1)
      }  
      )
  }
  
  function reverseWord (str) {
    //code di sini
    var hasil = ''
    for (var i = str.length-1; i >= 0; i--){
        hasil += str[i]
    }
    return hasil
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var hasil = ''
    for (var i = 0; i < str.length; i++){
        if (str[i]===str[i].toLowerCase()){
            hasil += str[i].toUpperCase()
        } else {
            hasil += str[i].toLowerCase()
        }
    }
    return hasil
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.replace(/\s+/g, '')
  }
  
  function passwordGenerator (name) {
    //code di sini
    var gantiVocal =changeVocals(name)
    var balikHuruf = reverseWord(gantiVocal)
    var tukarUkuran = setLowerUpperCase(balikHuruf)
    var hapusSpasi = removeSpaces(tukarUkuran)

    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return hapusSpasi
    }    
    
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'