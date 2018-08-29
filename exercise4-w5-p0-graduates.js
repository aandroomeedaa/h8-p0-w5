function graduates (students) {
    // VARIABLE INITIALIZATION
    var listClass = [];
    var school = {};
    
    // CREATING LIST OF CLASSES FROM INPUT
    for (var i=0; i<students.length; i++) { // get list of class
        var studentClass = students[i].class;
        if (listClass.includes(studentClass)) {
            // do nothing
        } else {
            listClass.push(studentClass);
        }
    }

    // CREATE OBJECT CLASSES
    for (var j=0; j<listClass.length; j++) {
        
        var schoolKey = listClass[j];
        school[schoolKey] = [];
    }
    
    //SEPARATING STUDENT INTO EACH OBJECT OF CLASSES
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
    
    // DELETING KEY CLASS FROM OBJECT school (as output expected)
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
