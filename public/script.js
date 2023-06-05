  //activity box info for the sidebar on the right
  const activityBoxInformation = document.getElementById('activityBoxInformation');
  //
  //getStartedButton element with its respective onclick event handler
  const getStartedButton = document.getElementById('getStarted');
  getStartedButton.addEventListener("click", function(event){
    //Scroll to intro page section
    scrollToSection(document.getElementById('introPageSection'));
  });

  const deleteIcon = document.getElementById('deleteIcon');
  deleteIcon.addEventListener("click", function(event){
    //reset input fields

    //hide 
    activityBoxInformation.hidden = true;
    //show default text for sidebar
    document.getElementById('activityBoxText').hidden = false;
  });

  //
  const submitGoalButton = document.getElementById('submitGoalButton');
  submitGoalButton.addEventListener("click", function(event){
    //Submit data in input fields to generate sidebar activity box
    //const activityBox = document.getElementById('activityBox');
    //activityBox.innerHTML = sidebarInformationContent;
    //get input from setting goal page section input fields and use to populate activity box
    
    activityBoxInformation.hidden = false;
    document.getElementById('activityBoxText').hidden = true;

    document.getElementById('dateBoxInformation').innerHTML = getDateString();
    document.getElementById('runningModeInfo').innerHTML = document.getElementById('runningModeDropdown').value;

    const durationInfo = document.getElementById('durationInfo');
    var durationString = document.getElementById('hourInput').value + ":" + document.getElementById('minuteInput').value + ":";
    durationString = durationString + document.getElementById('secondsInput').value;
    durationInfo.innerHTML = durationString;

    document.getElementById('distanceInfo').innerHTML = document.getElementById('targetDistanceInput').value +"km";

    document.getElementById('speedInfo').innerHTML = document.getElementById('speedDropdown').value;

    document.getElementById('weatherInfo').innerHTML = document.querySelector('input[name="weatherSelect"]:checked').value;
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

