function groupAnimals(animals) {
    
    for (i = 0; i < animals.length; i++) {
        
        var arrayUniq = [animals[0]]
        for (j = 0; j < arrayUniq.length; j++) {
            var isUniq = false
            if (arrayUniq[j][0] !== animals[i][0]){
                isUniq = true
            }
            if (isUniq === true) {
                arrayUniq.push([animals[j]])
            }
        }
    }
    return arrayUniq

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));

/**
 * algoritma,
 * 1. pertama, bikin variabel "arrayTemp" untuk menampung hasil pengolahan
 * 2. lalu, lakukan loop untuk memasukkan array dari "animals" ke dalam "arrayTemp"
 * 3. dalam looping ini, lakukan juga proses kondisional dimana jika animals[i] memiliki indeks[0] yang sama, masukkan dalam 1 array yang sama
 * 4. else ,animals[i] masukkan dalam array baru masing masing
 * 5. sort arrayTemp
 * 
 */



// function groupAnimals(animals) {
//     // you can only write your code here!
//     var arrayInisial = []
//     for ( var i = 0; i < animals.length; i++){ //2
//         arrayInisial.push(animals[i][0]) // ['c', 'a', 'k'] //3
//         var arrayBanding =[arrayInisial[0]] //['c', 'a']
//         for (var j = 1; j < arrayInisial.length; j++) { //1
//             if (arrayInisial[j] !== arrayBanding[i]){ //a !== c
//                 arrayBanding.push(arrayInisial[j])  //
//             }
//         }
//     }
//     return arrayBanding
// }



// variabel isDuplikat = false

// ['c', 'a', 'k']


  /**
  loop
  cacing
    c
  ayam
    a
  kuda
    k
  anoa
    a
  kancil
    k

[
    c,
    a,
    k,
]

   */