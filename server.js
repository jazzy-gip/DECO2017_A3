const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
   })
let server = app.listen(8888, function(){
 console.log("App server is running on port 8888");
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

var inputElement = document.querySelector('.tDistance-input');

inputElement.addEventListener('input', function() {
  var inputValue = inputElement.value;
  // Update the value by appending " km" after the user input
  inputElement.value = inputValue + ' km';
});