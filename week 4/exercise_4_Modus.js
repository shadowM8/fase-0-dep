/**
 * 
 * 
 */


function cariModus(arr) {
    var modus = 0     
    var frekuensiMax = 0
    var angka = 0
    for (var i = 0; i < arr.length; i++) {
        var frekuensi = 0 // berapa kali nilai modus tampil dalam arr
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                frekuensi = frekuensi + 1
                if (frekuensi>frekuensiMax){
                    frekuensiMax = frekuensi
                    modus = i
                }
            }
        }
    }
    // cek jika tidak ada angka sama
    if(frekuensiMax === 0) {
        return -1
    }
    //cek kalo arr isinya cuma 1 jenis angka
    for (var k = 0; k < arr.length; k++){
        angka = angka + arr[k]
        if (angka / arr.length === arr[k]){
            return -1
        }
    }
    return arr[modus]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1