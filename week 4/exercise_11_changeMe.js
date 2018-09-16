function changeMe(arr) {
    // you can only write your code here!
    var obyek = {}
    var hariIni = new Date()
    if (arr.length === 0) {
        return ""
    } else {
        for (var i = 0; i < arr.length; i++) {
            obyek.firstName = arr[i][0]
            obyek.lastName = arr[i][1]
            obyek.gender = arr[i][2]
            obyek.age = hariIni.getFullYear() - arr[i][3]
            if (!arr[i][3] || obyek.age <= 0) {
                obyek.age = 'Invalid Birth year'
            }
            console.log(obyek)
        }
    }

    // console.log(obyek)
}
//   var Object1 = {firstName:'Christ',lastName:'Evans',gender:'Male',age:'36'}
//   var Object2 = {firstName:'Robert',lastName:'Downey',gender:'Male',age:'Invalid Birth year'}

//   console.log(Object1)
//   console.log(Object2)

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""