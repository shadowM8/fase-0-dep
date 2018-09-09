// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.


function targetTerdekat(arr) {
  // you can only write your code here!
  var arrayLingkaran = []
  var arraySilang = []
  var selisih = 0
  var arraySelisih = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'o') {
      arrayLingkaran.push(i)
    } else if (arr[i] == 'x') {
      arraySilang.push(i)
    }
  }
  if (arraySilang.length == 0 || arraySilang.length == 0){
    return 0
  }
  for (var j = 0; j < arraySilang.length; j++) {
    selisih = Math.abs(arrayLingkaran[0] - arraySilang[j])
    arraySelisih.push(selisih)
  }
  arraySelisih.sort(function(a,b) { return a - b}) 
  
  return arraySelisih[0]

}



// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2