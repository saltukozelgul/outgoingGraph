function getDates() {
  var XLSX = require('xlsx')
  var workbook = XLSX.readFile('./views/datas/veri.xlsx');
  var sheet_name_list = workbook.SheetNames;
  var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  var myArray = xlData[0]["Sayın SALTUK BUĞRA ÖZELGÜL"].split(" ");
  return myArray[0] + myArray[1] + myArray[2]
}


function pullData() {
  var data = [0,0,0,0,0,0,0]
  var XLSX = require('xlsx')
  var workbook = XLSX.readFile('./views/datas/veri.xlsx');
  var sheet_name_list = workbook.SheetNames;
  var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  for (x = 0;x<xlData.length;x++) {
    let fisNo = xlData[x].__EMPTY
    let desc = xlData[x].__EMPTY_1
    let price = xlData[x].__EMPTY_2
    let money = xlData[x].__EMPTY_3
    if (String(desc).includes("YEMEK SEPETI")) {
      data[0] += parseFloat(price)
    }
    else if (String(desc).includes("GETIR")) {
      data[1] += parseFloat(price)
    }
    else if (String(desc).includes("TRENDYOL")) {
      data[2] += parseFloat(price)
    }
    else if (String(desc).includes("KK")) {
      data[3] += parseFloat(price)
    }
    else if (String(desc).includes("VODAFONE") 
    || String(desc).includes("TURKSAT")
    || String(desc).includes("ENERJISA")) {
      data[4] += parseFloat(price)
    }
    else if (String(desc).includes("ÖĞRENİM KREDİSİ")) {
      data[5] += parseFloat(price)
    }
    else {
      var floatPrice = parseFloat(price)
      if (!isNaN(floatPrice)) {
        data[6] += floatPrice
      }
      
    }
  }
  return data
}

function overallData() {
  var data = [0,0,0]
  var XLSX = require('xlsx')
  var workbook = XLSX.readFile('./views/datas/veri.xlsx');
  var sheet_name_list = workbook.SheetNames;
  var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  for (x = 0;x<xlData.length;x++) {
    let fisNo = xlData[x].__EMPTY
    let desc = xlData[x].__EMPTY_1
    let price = xlData[x].__EMPTY_2
    let money = xlData[x].__EMPTY_3
    var floatPrice = parseFloat(price)
    if (!isNaN(floatPrice) && floatPrice >0) {
      data[0] += floatPrice
    }
    else if (!isNaN(floatPrice) && floatPrice <0) {
      data[1] += floatPrice
    }
    if (!isNaN(floatPrice)) {
      data[2] += floatPrice
    }
  }
  return data
}

module.exports = {
    pullData: function() {
        return pullData()
    },
    overallData: function() {
      return overallData()
    },
    getDates: function() {
      return getDates()
    }
};