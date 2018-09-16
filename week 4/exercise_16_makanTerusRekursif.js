/**
 * 
 * 1. fungsi ini akan mengurangkan paramter waktu dengan 15 secara berulang, sampai waktu habis ( waktu > 15)
 * 2. jika waktu awal <= 15, return 1
 * 3. jika waktu awal <= 0, return 0
 * 4. selain itu, return berapa kali pengurangan waktu terjadi
 * 5. jadi pertama tentukan start = waktu
 * 6. tentukan limit > 15
 * 7. decremen   
 */


function makanTerusRekursif(waktu) {
    // you can only write your code here!    
    if (waktu <= 0) {
        return 0
    } else {
        var jumlahPesan = 1
        return jumlahPesan + makanTerusRekursif(waktu - 15)
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0

/**
 *  
 */