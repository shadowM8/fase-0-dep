function shoppingTime(memberId, money) {
    var pelanggan = {}
    pelanggan.memberId = memberId
    pelanggan.money = money
    pelanggan.listPurchased = []
    pelanggan.changemoney = 0
    var barang = []
    barang[0] = ['Sepatu Stacattu', 1500000]
    barang[1] = ['Baju Zoro', 500000]
    barang[2] = ['Baju H&N', 250000]
    barang[3] = ['Sweater Uniklooh', 175000]
    barang[4] = ['Casing Handphone', 50000]

    if (!pelanggan.memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    if (pelanggan.money <= 50000) {
        return "Mohon maaf, uang tidak cukup"
    }
    var i = 0
    var selisih = pelanggan.money
    for (var i = 0; i < barang.length; i++) {        
        if (selisih >= 50000 && selisih >= barang[i][1]) {
            pelanggan.listPurchased.push(barang[i])
            selisih = selisih - barang[i][1]
        }
    }
    // console.log(barang)
    pelanggan.changemoney = selisih
    return pelanggan
}


// console.log(shoppingTime('1820RzKrnWn08', 170000))


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja