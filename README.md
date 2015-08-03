#Testing Angular Services

This sample app illustrated how to write unit tests for Angular services that use $http calls to remote endpoints.

## Installation

Clone this repo and install its dependencies


    git clonegit@github.com:vjwilson/testing-angular-services.git
    cd testing-angular-services/
    npm install
    bower install

    
## Running the app

Start up the local web server of your choice and visit the URL it directs you to.

For instance, if you are on a Mac with 10.9 Mavericks or above, you can simply use the built-in PHP web server. From within the root of the repo directory, enter:

    php -S localhost:8000

and then visit `http://localhost:8000` in a browser.

## Running the tests

The project's tests are written using the [Jasmine testing framework](http://jasmine.github.io/) and run using the [Karma test runner](http://karma-runner.github.io/). To run the unit tests, enter:

    npm test



