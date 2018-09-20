function highestScore (students) {
    // Code disini
    var hasil = {}
    // var hasil = []   
    for (var i = 0; i < students.length; i++) { // menfilter kelas dari yang dobel menjadi unik
      var kelas = students[i].class
      var nama = students[i].name
      var score = students[i].score

      hasil[kelas] = {}
      hasil[kelas]['nama'] = nama
      hasil[kelas]['score'] = score
    }
    for (var j = 0; j < students.length; j++) { // bandingkan object hasil dengan array students, yang diband
      var kelasDua = students[j].class          // -ingkan itu skor dari objek hasil dan skor dari array students
      if (hasil[kelasDua]['score'] < students[j].score) {
        hasil[kelasDua]['score'] = students[j].score
        hasil[kelasDua]['nama'] = students[j].name
      }
    }    
    return hasil
  }

  /**
   * 
   */
  
  // TEST CASE
  console.log(highestScore([
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
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  // console.log(highestScore([
  //   {
  //     name: 'Alexander',
  //     score: 100,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Alisa',
  //     score: 76,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Vladimir',
  //     score: 92,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Albert',
  //     score: 71,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Viktor',
  //     score: 80,
  //     class: 'tigers'
  //   }
  // ]));
  
  // // {
  // //   foxes: { name: 'Alexander', score: 100 },
  // //   wolves: { name: 'Alisa', score: 76 },
  // //   tigers: { name: 'Viktor', score: 80 }
  // // }
  
  
  // console.log(highestScore([])); //{}
  