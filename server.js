/*
Node 101 - Lecture 1

The first thing you want to do when building a web application is setup a basic express server.
At a rudimentary level it's just a REST API.
*/

/*
Before we begin, we need to run `NPM INSTALL` in PRE existing projects in the root directory in terminal.
This is because people install packages and we need to sync with what packages they're using.

In fresh projects, we need to run `NPM INIT` and fill out our project details before installing packages.
Whenever you install a new package you must either run it as:
`npm install [package name] --save` to save it as a production dependency
OR
`npm install [package name] --save-dev` to save it as a development ONLY dependency.
*/


//First require the express module.
var express = require("express");
//Then initialize it as an api by calling express as a function.
var api = express();
//Then start writing API calls
//We will start off with a very basic get request
api.get("/", function(req,res) {
  /*
  This is our first REST endpoint.
  There are two essential parameters to a Express middleware function:
  req and res (next we will discuss later).

  req (request): is all the data that is being sent from the browser to the server.
  res (result): is all the data that is being sent from the server to the browser.
  */
  return res.send("Hello world. I am running on Node");
  /*
  In this case, we sent Hello World from the server to the browser!
  We will need to setup the server to access this Hello World app though.
  */
})

//To setup a server all you have to do is call the `.listen()` function in the express app.
api.listen(3000);
//In this case we will go to port 3000 on localhost
//http://localhost:3000 and check it out.
//Make sure you run `node server.js` in the root directory of this example first.
