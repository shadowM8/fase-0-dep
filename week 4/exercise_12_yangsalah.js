function shoppingTime(memberId, money) {
    // you can only write your code here!
    var pelanggan = {}
    pelanggan.memberId = memberId
    pelanggan.money = money
    pelanggan.listPurchased = []
    var barangSale = {}
    barangSale['Sepatu Stacattu'] = 1500000
    barangSale['Baju Zoro'] = 500000
    barangSale['Baju H&N'] = 250000
    barangSale['Sweater Uniklooh'] = 175000
    barangSale['Casing Handphone'] = 50000
    var pengeluaran = {}
    var panjangList = pelanggan.listPurchased.length

    if (pelanggan.money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    } else if (!pelanggan.memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    pelanggan.changeMoney = money
    while (pelanggan.changeMoney >= 50000) {
        if (pelanggan.changeMoney >= 1500000) {
            pelanggan.listPurchased.push('Sepatu Stacattu')
            pengeluaran.moneySpent = barangSale['Sepatu Stacattu']
        } else if (pelanggan.changeMoney >= 500000) {
            pelanggan.listPurchased.push('Baju Zoro')
            pengeluaran.moneySpent = barangSale['Baju Zoro']
        } else if (pelanggan.changeMoney >= 250000) {
            pelanggan.listPurchased.push('Baju H&N')
            pengeluaran.moneySpent = barangSale['Baju H&N']
        } else if (pelanggan.changeMoney >= 175000) {
            pelanggan.listPurchased.push('Sweater Uniklooh')
            pengeluaran.moneySpent = barangSale['Sweater Uniklooh']
        } else if (pelanggan.changeMoney >= 50000) {
            pelanggan.listPurchased.push('Casing Handphone')
            pengeluaran.moneySpent = barangSale['Casing Handphone']
        }
        pelanggan.changeMoney = pelanggan.changeMoney - pengeluaran.moneySpent
    }

    return pelanggan
}


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