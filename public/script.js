 
var sidebarInformationContent = "";

  //getStartedButton element with its respective onclick event handler
  const getStartedButton = document.getElementById('getStarted');
  getStartedButton.addEventListener("click", function(event){
    //Scroll to intro page section
    scrollToSection(document.getElementById('introPageSection'));
  });

  //
  const submitGoalButton = document.getElementById('submitGoalButton');
  submitGoalButton.addEventListener("click", function(event){
    //Submit data in input fields to generate sidebar activity box
    const activityBox = document.getElementById('activityBox');
    activityBox.innerHTML = sidebarInformationContent;
    //get input from setting goal page section input fields and use to populate activity box

  })

  const setRunningGoalButton = document.getElementById('setRunningGoal');
  setRunningGoalButton.addEventListener("click", function(event){
    scrollToSection(document.getElementById('settingGoalPageSection'))
  })

  //Parameter: element object supplied as argument, function causes page to scroll to specified section
  function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  //return string representation of current date and time
  function getDateString(){
    const today = new Date();
    return today.toLocaleDateString("en-US", {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
    })
  }
  console.log(getDateString());

