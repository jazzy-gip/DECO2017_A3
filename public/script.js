 //boolean, checks if user has set goals and submitted them
 var sidebarPopulated = false;
 //Tips that show up for each selected weather, future expansion to include multiple for each weather type
 const weatherTips = new Map();
 weatherTips.set('Sunny','Drink plenty of water before, during, and after your run to prevent dehydration and apply a high SPF broad-spectrum sunscreen to exposed areas of skin. ');
 weatherTips.set('Partly cloudy','Dress yourself in lightweight, breathable layers of clothing that you can easily adjust and take off if necessary as the weather changes. ');
 weatherTips.set('Overcast','These weather conditions can sometimes be unpredictable as potential rain storms and showers may occur. Be alert and stay prepared to seek shelter when the weather changes.');
 weatherTips.set('Humid','Avoid drinking caffeine before your run as this can cause the increase your heart rate and body heat temperature. Stay hydrated with water!');
 weatherTips.set('Windy','Maintain a strong running form of a straight back and avoid hunching or leaning forward against strong winds whilst running.');
 weatherTips.set('Rainy','Ensure your running shoes have a good quality grip as you may encounter slippery surfaces that could cause falling injuries. ');
 weatherTips.set('Chilly','Cold weather can impact your breathing during your run and could potentially make your muscles stiffer, please be cautious and adjust your pace accordingly. ');
 weatherTips.set('Stormy','If a storm suddenly approaches, it’s advisable to not be running at this time. Please seek shelter immediately and avoid be near trees or bodies of water as they attract lighting.');
  
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

    //hide sidebar
    activityBoxInformation.hidden = true;
    sidebarPopulated = false;
    //show default text for sidebar
    document.getElementById('activityBoxText').hidden = false;
  });

  //
  const submitGoalButton = document.getElementById('submitGoalButton');
  submitGoalButton.addEventListener("click", function(event){
    //Submit data in input fields to generate sidebar activity box
    //get input from setting goal page section input fields and use to populate activity box
    sidebarPopulated = true;
    activityBoxInformation.hidden = false;
    document.getElementById('activityBoxText').hidden = true;

    document.getElementById('dateBoxInformation').innerHTML = getDateString();
    document.getElementById('runningModeInfo').innerHTML = document.getElementById('runningModeDropdown').value;

    const durationInfo = document.getElementById('durationInfo');
    var durationString = formatTime(document.getElementById('hourInput').value) + ":" + formatTime(document.getElementById('minuteInput').value) + ":";
    durationString = durationString + formatTime(document.getElementById('secondsInput').value);
    durationInfo.innerHTML = durationString;

    document.getElementById('distanceInfo').innerHTML = document.getElementById('targetDistanceInput').value +"km";

    document.getElementById('speedInfo').innerHTML = document.getElementById('speedDropdown').value;

    document.getElementById('weatherInfo').innerHTML = document.querySelector('input[name="weatherSelect"]:checked').value;
  })

  //Timer element//
  var timerElement = document.getElementById("timer");
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var intervalId;


  function startTimer() {
    clearInterval(intervalId);
    //1000 millisecond polling interval, call updateTimer function each 1000 milliseconds
    intervalId = setInterval(updateTimer, 1000);
    document.getElementById("startRunningButton").disabled = true;
  }
  function checkTimerCompletion(){
    if (document.getElementById('hourInput').value == hours){
        if (document.getElementById('minuteInput').value == minutes){
            if (document.getElementById('secondsInput').value == seconds){
                return true;
            }
        }
    }
    return false;
  }
  function updateTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    timerElement.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    //if target duration reached, stop timer, indicate completion to user
    if (checkTimerCompletion()){
        //change ring colour to green to indicate completion
        document.getElementById('targetDistanceCircle').className = "circle greenBorder";
        //change titles to green
        document.getElementById('startRunningDurationTitle').className = "greenFont textBox rightTextAlign";
        document.getElementById('startRunningDistanceTitle').className = "greenFont textBox centerTextAlign";
        document.getElementById('startRunningSpeedTitle').className = "greenFont textBox leftTextAlign";
        //indicate 'well done!' to user on screen
        document.getElementById('startRunningTitle').innerHTML = "Well done!";
        document.getElementById('startRunningTitle').className = "greenFont";
        //stop timer
        clearInterval(intervalId);
    }
  }
  //pads 0 in front of h/m/s if it is single digit, returns padded input if time is single digit or original input
  function formatTime(time) {
    if (time == 0) return "00";
    if (time < 10) return "0" + time;
    else return time;
  }

  //on click event handlers
  const finishButtonEnd = document.getElementById('finishButton');
  finishButtonEnd.addEventListener("click", function(event){
    scrollToSection(document.getElementById('introPageSection'));
  })

  const startRunningButton = document.getElementById('startRunningButton');
  startRunningButton.addEventListener("click", function(event){
    //only run code if sidebar is populated from user input
    if (sidebarPopulated){
        //scrolls user to start running page section
        scrollToSection(document.getElementById('startRunningPageSection'));
        //start duration timer
        startTimer();

        //populate start running page

        var durationString = formatTime(document.getElementById('hourInput').value) + ":" + formatTime(document.getElementById('minuteInput').value) + ":";
        durationString = durationString + formatTime(document.getElementById('secondsInput').value);

        document.getElementById('targetDistance').innerHTML = document.getElementById('targetDistanceInput').value + " km";
        document.getElementById('targetSpeed').innerHTML = document.getElementById('speedDropdown').value;
        document.getElementById('targetDuration').innerHTML = durationString;

        document.getElementById('runningTipsDescription').innerHTML = weatherTips.get(document.querySelector('input[name="weatherSelect"]:checked').value);
        document.getElementById('weatherIcon').src = "./images/" + document.querySelector('input[name="weatherSelect"]:checked').value + ".png";
    }
    
  })
  
  const setRunningGoalButton = document.getElementById('setRunningGoal');
  setRunningGoalButton.addEventListener("click", function(event){
    scrollToSection(document.getElementById('settingGoalPageSection'));
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

