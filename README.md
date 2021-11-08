# scribble!
## Link: https://scribble-tracker.herokuapp.com/

<!--ABOUT THE PROJECT-->
## About the Project 

scribble! is a web application that acts as both an online journal and a mood tracker for users. Users can log in, create an entry and have a main dashboard where they are able to keep track and view their entries.

This project was inspired by similar journaling mobile apps (such as Reflectly, Daylio etc.). I wanted to create a personal online web journal that I could tailor according to my preferences. This was also a good opportunity for me to get hands-on experience with a creating a full-stack application and deploying it on a cloud platform such as Heroku. 


<!--BUILT WITH-->
## Built with 

+ React.js (+ Redux)
+ Sass
+ NodeJS
+ MongoDB Atlas

<!--GETTING STARTED-->
## Run a local copy

To run a local copy of the application on your machine, follow the instructions below:

### Starting up React
1. Fork the repository and after doing so, inside the *scribble* directory, install all packages using:
  ```sh
  npm install
  ```
2. Inside the *utilities* folder, edit the first line in the *utilities.js* file to:
 ```sh
  export const API='http://localhost:5000'
  ```
3. Start the web application using the following command:
  ```sh
  npm start
  ```
  
### Starting up the server
1. Inside the *scribbleProject* directory, open **app.js** in VS Code and in the terminal, type in the following:
  ```sh
  npm run server
  ```

 
