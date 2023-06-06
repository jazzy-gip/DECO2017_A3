const express = require('express');
const app = express();
app.use(express.static('public'));
//Make path to root of website to serve index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
   })
   //listen on port 8888
let server = app.listen(8888, function(){
 console.log("App server is running on port 8888");
});


