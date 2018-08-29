//01 bintang 1 mendatar 5 menurun
var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
while (rows1 > 0) {
    console.log('*')
    rows1 = rows1 - 1
}

//02 bintang 5 mendatar 5 menurun
var rows2 = 5; // input the number of rows

// do loops to display asterisks in the console.
while (rows2 > 0) {
    var rows2a = 5;
    var asterisk = ''
    while (rows2a > 0) {
        asterisk = asterisk + '*'
        rows2a = rows2a - 1
    }
    console.log(asterisk)
    rows2 = rows2 - 1
}

//03 menyusun tangga bintang
var rows3 = 5; // input the number of rows

// do loops to display asterisks in the console.
var rows3 = 5;
var asterisk3 = '';
while (rows3 >0) {
    asterisk3 = asterisk3 + '*'
    console.log(asterisk3)
    rows3 = rows3 - 1
}