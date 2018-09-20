function largestNumber(numbers) {
    // Code here
    while (numbers.length > 1) {
        if (numbers[0] > numbers[numbers.length - 1]) {
            numbers.pop()
        } else {
            numbers.shift()
        }
    }
    // for (var i = 0; i < numbers.length; i++){
    //     if(numbers[0] > numbers[numbers.length-1]){
    //         numbers.pop()
    //     } else {
    //         numbers.shift()
    //     }
    // }
    return numbers

}


// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321