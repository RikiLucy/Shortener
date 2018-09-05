Application require installed `node.js` and `npm` or `yarn`

#Install
* Install client dependencies in client folder with `npm i`
* Install server dependencies in backend folder with `npm i`
* Have MySql database named `shortener`
* Edit backend/server/config/config.json with yr local username and password for connection to DB
* Run migration in backend folder with `node_modules/.bin/sequelize db:migrate`

#Start
* Run server in backend folder with `npm run start:dev`

Server will listen on port 8000
* Run client in development mode in client folder with `npm start`

Open `http://localhost:3000` to view it in the browser.

  
#Build

* `npm run build`  in client folder- Builds the app for production to the build folder. The build folder is ready to be deployed.
The project was built assuming it is hosted at `the server root`.

* You may serve it with a static server: 
1) `npm install -g serve`
2) `serve -s build`
3) Open `http://localhost:5000` to view it in the browser.

