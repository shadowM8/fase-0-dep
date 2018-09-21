function cariPelaku(str) {
    // you can only write your code here!
    var hasil = str.match(/abc/gi)  // `g` menandakan pencarian secara global, tidak hanya satu kali
    return hasil                    // `i` menandakan pencarian karakter dengan ignore case/mengabaikan besar kecilnya karakter
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2