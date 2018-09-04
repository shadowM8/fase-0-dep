// YOUR ALGORITMA OR PSEUDOCODE HERE

// STORE "uangAnak" without any value
// STORE "hargaRubik" with 35000 value
// STORE "hargaTamiya" with 185000 value
// STORE "hargaRobot" with 350000 value

// IF "uangAnak" equal to or more than "hargaRobot" value
// 	DISPLAY "Beli Robot Star Wars"
// ELSE IF "uangAnak" value equal to "hargaTamiya" or less than "hargaRobot" value
// 	DISPLAY "Beli Tamiya mini 4wd"
// ELSE IF "uangAnak" value equal to "hargaRubik" or less than "hargaTamiya" value
// 	DISPLAY "Beli Rubik 3x3"
// ELSE
// 	DISPLAY "Nabung lagi ya, dek!"

var uangAnak = 100000

if (uangAnak >= 350000) {
    console.log("Beli Robot Star Wars")
    uangAnak = uangAnak - 350000
} else if (uangAnak >= 185000) {
    console.log("Beli Tamiya mini 4wd")
    uangAnak = uangAnak - 185000
} else if (uangAnak >= 35000) {
    console.log("Beli rubik 3x3")
    uangAnak = uangAnak - 35000
} else {
    console.log("Nabung lagi ya,dek!")
}

console.log("Sisa uang kembalian sebesar "+uangAnak )
