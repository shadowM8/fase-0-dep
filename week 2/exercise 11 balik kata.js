/*
Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", 
function akan me-return "eoD nhoJ".

algoritma untuk membalik kata, 
1. temukan indeks terakhir dari satu nilai string pada variabel x
2. setelah ketemu indeks terakhirnya, masukkan hasilnya ke variabel x-baru, tampilkan di terminal , 
3. ulangi langkah 1 dengan nilai indeks terakhir -1 
4. ulangi langkah 2 dengan nilai indeks terakhir -1
5. lakukan langkah 3 dan 4 sampai nilai indeks sama dengan 0

*/
var kata = "Joe Higashi"
var kataBaru =""

for (indeksAkhir=kata.length-1;indeksAkhir>=0;indeksAkhir--) {
    kataBaru =  kataBaru + kata[indeksAkhir] 
    //console.log(kata)
}
console.log(kataBaru)

// function balikKata(kata) {
//     // you can only write your code here!
//     var balik = ''
//     for (var i=kata.length-1; i >=0; i--){
//         balik = balik + kata[i]
//     }
//     return balik
//   }
  
//   // TEST CASES
//   console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
//   console.log(balikKata('John Doe')); // eoD nhoJ
//   console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
//   console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
//   console.log(balikKata('Super')); // repuS
