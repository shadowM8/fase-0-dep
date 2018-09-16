

// for (var index = max; index >= 0; index--) {
//     if (index % 2 !== 0) {
//         deret = deret + index.toString()
//     }
//     else { }
// }
// //console.log(deret)

// for (var j = max; j > 0; j--) {
//     console.log(deret)
// }

//looping dalam looping

var max = 4

//var temp = '' //kesalahan saya, temp di luar for
for (var i = max; i > 0; i--) {
    var temp = '' //seharusnya, penampung di dalem for, tapi kenapa?
    for (var j = max; j > 0; j--) {
        if (j % 2 !== 0) {
            temp = temp + j
        }
    }console.log(temp)

}









