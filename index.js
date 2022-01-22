var express = require('express')
var dataModule = require("./modules/pullData.js");
var app = express()
var ejs = require('ejs');

app.engine('.ejs', ejs.__express);
app.set('views',__dirname+'/views');
app.use(express.static('views'));

app.get("/", function(req,res) {

	res.render('./pages/index.ejs', {
		data: dataModule.pullData(),
    dates: dataModule.getDates()
	});

});

app.get("/overAll", function(req,res) {

	res.render('./pages/overAll.ejs', {
		data: dataModule.overallData(),
    dates: dataModule.getDates()
	});

});

app.listen(8000,function(){
console.log("Server started! port:8000");
});

dataModule.getDates()

