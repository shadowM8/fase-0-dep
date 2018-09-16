/**
 * 
 * 1. cari syarat nilai median dari suatu array.
 * 2. syarat nilai median dari suatu array yaitu dia terletak pada indeks ke - n
 * 3. dimana n nilainya adalah panjang array dibagi 2
 * 4. jika panjang array ganjil maka bulatkan nilai n ke bawah, 
 *  4a. hasil median yaitu arraySoal[n]
 * 5. jika panjang array genap maka masuk ke 4b
 *  4b. hasil median yaitu (arraySoal[n] + arraySoal[n-1] ) / 2
 */


function cariMedian(arr) {
    // you can only write your code here!
    var indeks = 0
    var median = 0
    indeks = arr.length / 2
    if (arr.length % 2 !== 0) {
        indeks = Math.floor(indeks)
        return arr[indeks]
    } else if (arr.length % 2 === 0) {
        median = (arr[indeks] + arr[indeks - 1]) / 2
        return median
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5