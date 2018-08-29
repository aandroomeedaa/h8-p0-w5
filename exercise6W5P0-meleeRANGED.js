function meleeRangedGrouping (str) {
    var result = [];
    
    if (str.length === 0) {
        return result;
    }
    
    var splittedStr = str.split(',');
    // console.log(splittedStr);
    
    var splitted = [];
    for (var i=0; i<splittedStr.length; i++) {
        splitted.push(splittedStr[i].split('-'));
    }
    var listMeleeType = [];
    
    for (var j=0; j<splitted.length; j++) {
        var meleeType = splitted[j][1];
        var match = false;
        
        if (listMeleeType.includes(meleeType) === true) {
            match =true;
        }
        
        if (match === false) {
            listMeleeType.push(meleeType);
        }
    }
    
    for (var k=0; k<listMeleeType.length; k++) {
       
        var tempArr = [];
        for (var l=0; l<splitted.length; l++) {
            if (listMeleeType[k] === splitted[l][1]) {
                var meleeName = splitted[l][0]
                tempArr.push(meleeName);
            }
        }
        
      result.push(tempArr);
    }
    
    return result;
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
