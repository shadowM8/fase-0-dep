function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var hasil = []
    // var obj = {}
    // var ongkos = 0
    for (var i = 0; i < arrPenumpang.length; i++) {
        var ongkos = 0
        var obj = {}

        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1] // kasus 1, ini B
        obj.tujuan = arrPenumpang[i][2]// kasus 1, ini F

        var ruteAwal = rute.findIndex(rute => rute === obj.naikDari)
        var ruteAkhir = rute.findIndex(rute => rute === obj.tujuan)
        
        var trayek = rute.slice(ruteAwal, ruteAkhir) //brarti trayek lengthnya 4 kan
        for (var k = 0; k < trayek.length; k++) {
            ongkos = ongkos + 2000
        }
        obj.bayar = ongkos

        hasil.push(obj)
    }
    return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]