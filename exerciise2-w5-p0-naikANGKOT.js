function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const biaya = 2000;
  var hasil = [];
  
  if (arrPenumpang.length === 0) {
    return arrPenumpang;
  }
  
  for (let i = 0; i < arrPenumpang.length; i++) {
    var penumpang = arrPenumpang[i];
    var objPenumpang = {};
    
    objPenumpang.penumpang = penumpang[0];
    objPenumpang.naikDari = penumpang[1];
    objPenumpang.tujuan = penumpang[2];
    objPenumpang.bayar = biaya * (rute.indexOf(objPenumpang.tujuan) - rute.indexOf(objPenumpang.naikDari));
    
    hasil.push(objPenumpang);
  }
  
  return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
