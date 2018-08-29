function cariPelaku(str) {
    var finalStr = '';
    var newStr = str.match(/abc/g);
    
    var result = newStr.toString();
    
    for (var i=0; i<newStr.length; i++) {
        if (newStr[i] !== ',') {
            finalStr += newStr[i];
        }
    }
    
    var count = 0;
    for (var j=0; j<finalStr.length; j++) {        
        if (finalStr[j] === 'a') {
            for (var k=j+1; k<finalStr.length; k++) {
                              if (finalStr[k] === 'b') {
                    for (var l=k+1; l<finalStr.length; l++) {                   
                      if (finalStr[l] === 'c') {
                            count += 1;
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }
    
    return count;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
