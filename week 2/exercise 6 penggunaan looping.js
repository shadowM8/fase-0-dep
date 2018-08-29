//01 looping dengan while
var counter = 0
console.log('LOOPING PERTAMA')
while (counter < 20) {
    counter = counter + 2
    console.log(counter + ' - I love coding')
}
console.log('LOOPING KEDUA')
while (counter > 0) {
    console.log(counter + ' - I will become fullstack developer')
    counter = counter - 2
}

//02 Looping menggunakan For
console.log('LOOPING PERTAMA')
for (var counterDua = 0; counterDua <= 20; counterDua++) {
    console.log(counterDua + ' - I love coding')
}
console.log('LOOPING KEDUA')
for (var counterDua = 20; counterDua > 0; counterDua--) {
    console.log(counterDua + ' - I will become fullstack developer');
}

//03a angka ganjil dan genap
for (counterTiga = 1; counterTiga < 100; counterTiga++) {
    counterMod = counterTiga % 2
    if (counterMod === 0) {
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }
}

//03b penambahan dan kelipatan
function soalTiga(inc, modular, kelipatan) {

    for (counterZe = 1; counterZe < 100; counterZe += inc) {
        counterMod = counterZe % modular
        if (counterMod === 0) {
            console.log(counterZe + kelipatan)
        } else {
            console.log('');
        }
    }
}
// deret + 2, kelipatan 3
soalTiga(2, 3, ' kelipatan 3')
// deret +5, kelipatan 6
soalTiga(5, 6, ' kelipatan 9')
// deret +9, kelipatan 10
soalTiga(9, 10, ' kelipatan 10')

