[![Build
Status](https://travis-ci.org/adabriand/dribbble-popular-posts.svg?branch=master)](https://travis-ci.org/adabriand/dribbble-popular-posts)
Dribbble Popular Posts
==============================

Dribbble Popular Posts is a web application that allows users to view the most popular shots on Dribbble.

Requirements
------------------------------
To *run* Dribbble Popular Posts, you only need
* Node.js (v0.10.25 or above)
* Bower (v1.7.9 or above)
* Gulp (v3.9.1 or above)

Installation
------------------------------
1. Install the dependencies:
  1. `bower install`
  2. `npm install`
2. Run the web server: `gulp start`
* If you want to change the default values for hostname `localhost` and port `3000`, you need to set up the environment variables - `HOST` and `PORT`.

Main Gulp Commands
------------------------------
* `gulp start-dev`: it starts the server on development mode.
* `gulp tdd`: it automatically compiles Sass files and runs Jasmine tests if there is changes on the source code.
* `gulp test`: it runs all Jasmine tests once.
* `gulp dist`: it builds the production code on the folder `frontend/dist`.
