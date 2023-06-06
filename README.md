# DECO2017_A3

Web app prototype documentation
### Context
-what the app does
The following app created is designed to function as a tracking application that's placed within the context of fitness and excercise, where users are able to input their set goals of wanting to be able to run a certain distance, speed and time so that the app will record down their data and put them to the test through implementing a live timer. This will guide and help users track their training information for that day and help them reflect on their performances, motivating them to improve on themselves better.

In order to implement single page architecture I recognise that I needed to utilise Angular or React to be able to accomplish this
In order to implement responsive web design - bootstrap framework to make seamless experience on mobile phone and screen sizes. But for this initial prototype...

### Iterations and improvements throughout development
-development steps - talk about creating html structure + css first, then adding javascript functionality
--development was done by making iterations based on different modules of the application

-code refactoring - removing duplicated css by utilising classes, inline css/ javascript moved to external files to separate structure, form and function
-variable/id renaming to improve code readability
-indentation redone for improved readability
-code comments put in place for easier future expansion/ collaboration

### Configuration steps to run locally
-npm install
-instruct user to go to localhost 8888 on browser to test

1. It is crucial for you to install Node.js before being able to run this project
2. Clone repository to computer.
3. Open directory in terminal and run 'npm install express' to download the dependencies (packages).
4. After install is complete, start by running the command: npm run start
5. The terminal should ouput a message indicating that the server is running on port 8888, so open your web browser and type in the url: http://localhost:8888 . The website should pop up afterwards. 

### Recommendations for future development and expansion

-Use of frontend framework such as Angular or React to implement reusable components to give a Single Page Architecture. 
-Use of bootstrap framework for responsive web design, along with use of viewport meta tag in html. An application like this would be best suited to mobile device dimensions, however, this prototype was developed through a desktop sized viewport.
-Input validation should be implemented clientside, with user feedback given if inappropriate input is entered in
-implementation of javascript cookies to let data persist between sessions and refreshes