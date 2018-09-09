/**
 * Keluaran yang diinginkan dari fungsi di bawah yaitu true jika deret aritmatika, dan false jika bukan
 * deret aritmatika, deret yang selisih antar angkanya sama
 * 
 */

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var selisihDeret = arr.slice(-1).pop() -arr.slice(-2,-1).pop()
    var bol = true
    for (var i = 0; i < arr.length-1; i++){
        if (selisihDeret !== arr[i+1]-arr[i]) {
            bol = false
        }
    }
    return bol
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false