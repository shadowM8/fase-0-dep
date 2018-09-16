/**
 * 
 * algoritma toko X
 * 1. Pertama tentukan parameter nya berwujud apa? shoppers tipe data array of object
 * 2. hampir mirip dengan array of array, jadi yang pertama kita lakukan yaitu, cari panjang dari shoppers.
 * 3. Lalu loop tiap object dengan coding untuk menyelesaikan masalah
 */

function countProfit(shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]
  ];
  // you can only write your code here!
  var arrayData = [
    { product: '', shoppers: [], leftOver: 0, totalProfit: 0 },
    { product: '', shoppers: [], leftOver: 0, totalProfit: 0 },
    { product: '', shoppers: [], leftOver: 0, totalProfit: 0 }
  ]
  if (shoppers.length === 0) {
    return []
  }
  for (var i = 0; i < listBarang.length; i++) {
    var totalAmount = 0
    var sisaBarang = listBarang[i][2]
    var index = 0
    arrayData[i].product = listBarang[i][0]
    for (var j = 0; j < shoppers.length; j++) {
      if (shoppers[j].product === arrayData[i].product) {
        arrayData[i].shoppers.push(shoppers[j].name)
        totalAmount = totalAmount + shoppers[j].amount
        sisaBarang = listBarang[i][2] - totalAmount
        index = j
      }
    }
    if (sisaBarang < 0) {
      arrayData[i].shoppers.pop()
      arrayData[i].leftOver = sisaBarang + shoppers[index].amount
      arrayData[i].totalProfit = listBarang[i][1] * (listBarang[i][2] - arrayData[i].leftOver)
    } else {
      arrayData[i].leftOver = sisaBarang
      arrayData[i].totalProfit = listBarang[i][1] * totalAmount
    }
  }
  return arrayData

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
// console.log(countProfit([])); //[]