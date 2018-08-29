function graduates (students) {
   
    var listClass = [];
    var school = {};
    
 
    for (var i=0; i<students.length; i++) { 
        var studentClass = students[i].class;
        if (listClass.includes(studentClass)) {
         
        } else {
            listClass.push(studentClass);
        }
    }

    for (var j=0; j<listClass.length; j++) {
        
        var schoolKey = listClass[j];
        school[schoolKey] = [];
    }
    
    
    for (var key in school) {
        for (var k=0; k<students.length; k++) {
            var studentClass = students[k].class;
            var studentScore = students[k].score;
            if (studentScore > 75) {
                if (studentClass === key) {
                    school[key].push(students[k]);
                }
            }
        }
    }
    
   
    for (var key in school) {
        for (var l=0; l<school[key].length; l++) {
            delete school[key][l].class;
        }
    }
    
    return school;
    
}
console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
