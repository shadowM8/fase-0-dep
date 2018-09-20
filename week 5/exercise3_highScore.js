function highestScore (students) {
    // Code disini
    var hasil = {}
    // var hasil = []   
    for (var i = 0; i < students.length; i++) {
      
      var obj = {}
      obj.name = students[i].name
      obj.score = students[i].score
      
      hasil[students[i].class] = obj
      // hasil.push(obj)
      
    }    
    return hasil
  }

  /**
   * algoritmanya
   * 1. Pertama kelompokkan dulu object di dalam array berdasar classnya
   * 2. Jadi yang classnya memiliki value sama dijadikan 1 kelompok
   * 3. Dari 1 kelompok ini, dibandingkan value scorenya mana yang paling tinggi
   * 4. masukkan ke object output
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
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
  