## Its a Car databse project

## postman

--get and post method
-- cehck teh contecnt type and hostory header

Project desciption :
-It will take all cars info as input data and will create new car object and store to car Server in car.json file.
-By clicking addcar button will create a new car object and push it cars array and JSON file will updated accordingly and from client side a new table raw will be displayed.
-User can not add iddentical licence twice.
-user can serach the car from car datbase and it will appear from client side.

## How to start this project

<!-- npm run dev

 "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }, -->

##Need to go server directory

- npm init -y
  -npm install express
  if you have node install already
  -node server.js
  to start teh sever

Note : The npm init command is used to create a Node. js project. The npm init command will create a package where the project files will be stored. All the modules you download will be stored in the package

Note:
The -y flag when passed to NPM commands tells the generator to use the defaults instead of asking questions. Example: npm init -y. Will simply generate an empty npm project without going through an interactive process.

Note : ow install Express in the myapp directory and save it in the dependencies list.

$ npm install express

## npm i -D nodemon

you dont need to restart the svrver

// no need start sever every change -d for dev dependency then we weedn inclde in scrcipts

- need edit pakage jason
  -add script start node sever.js for starting teh sever then
  -dev: nondemon index will constactly monitoring in dev stage
  we can start
  -npm run dev
