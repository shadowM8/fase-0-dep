// var objLuar = {}

// var objDalam = {}
// objDalam.test = 'sebelas'
// objDalam['test lagi'] = 'dua belas'
// objLuar.objDalam = objDalam
// console.log(objDalam)
// console.log(objLuar)
// console.log(Object.keys(objDalam))
// console.log(Object.values(objDalam).length)
// console.log(objDalam.length)

var tes = [
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]

var zz = Object.values(tes[0])[2]
var kelas = []
var woy
for ( var i = 0; i < tes.length; i++){
  woy = Object.values(tes[i])[2]  
  kelas.push(woy)
  
}
console.log(kelas)