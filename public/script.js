 
  
  //getStartedButton element with its respective onclick event handler
  const getStartedButton = document.getElementById('getStarted');
  getStartedButton.addEventListener("click", function(event){
    scrollToSection(document.getElementById('introPageSection'));
  });




  //Parameter: element object supplied as argument, function causes page to scroll to specified section
  function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }