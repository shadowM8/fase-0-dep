//03a angka ganjil dan genap
for (counterTiga = 1; counterTiga < 100; counterTiga++) {
    counterMod = counterTiga % 2
    if (counterMod === 0) {
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }
}

// //03b angka ganjil dan genap deret + 2
// for (counterTigaSatu = 1; counterTigaSatu < 100; counterTigaSatu += 2) {
//     counterMod = counterTigaSatu % 3
//     if (counterMod === 0) {
//         console.log(counterTigaSatu + ' kelipatan 3')
//     } else {
//         console.log('');
//     }
// }

function soalTiga(inc, modular, kelipatan) {
    
    for (counter = 1; counter < 100; counter += inc) {
        counterMod = counter % modular
        if (counterMod === 0) {
            console.log(counter + kelipatan)
        } else {
            console.log('');
        }
    }
}
// deret + 2, kelipatan 3
soalTiga (2, 3, ' kelipatan 3')
// deret +5, kelipatan 6
soalTiga (5, 6, ' kelipatan 9')
// deret +9, kelipatan 10
soalTiga (9, 10,' kelipatan 10')

