/*
===========================
Initial Grouping Descending
==========================
[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

function initialGroupingDescending(studentsArr) {
    // Only Code Here
    var output = [
        [studentsArr[0][0]]
    ]
  
    for ( var i = 0; i < studentsArr.length; i++) {
      var apakahUnik = true
      var hurufDepan = studentsArr[i][0]
      var index = 0
      //cek students terhadap output
      for ( var j = 0 ; j < output.length; j++) {
        if (studentsArr[i][0] === output[j][0]) {
          apakahUnik = false
          index = j
        }        
      }
      if (apakahUnik=== true) {
          output.push([hurufDepan, studentsArr[i]])
      } else {
          output[index].push(studentsArr[i])
      }  
    }
    return output
  }
  
  console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
  /*
  [
    [ 'J', 'Joni', 'Jono' ],
    [ 'B', 'Budi', 'Badu' ]
  ]
  */
  
  console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
  /*
  [
    [ 'Y', 'Yusuf' ],
    [ 'M', 'Mickey' ],
    [ 'G', 'Gong' ],
    [ 'D', 'Donald' ],
    [ 'A', 'Ali' ]
  ]
  */
  
  console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
  /*
  [
    [ 'S', 'Stone', 'Sticker' ],
    [ 'R', 'Rock', 'Rocker' ],
    [ 'B', 'Brick' ]
  ]
  */