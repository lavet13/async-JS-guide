'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Asynchronous JavaScript, AJAX and APIs
// so most of the code that we've been writing so far in the course has been synchronous code and synchronous simply means that the code is executed line by line,
// in the exact order of execution, that we defined in our code.

// 👉 Most code is synchronous;
// 👉 Synchronous code is executed line by line;
// 👉 Each line of code waits for previous line to finish;
// 👎 Long-running operations block code execution

// Now this can create problems when line of code takes a long time to run. For example, in this current line of code, we have an alert statement
// Now, as we've experienced in the past, this alert window will block the code execution, right? So nothing will happen on the page until we click that OK button.
// Because alert is blocking synchronous code.

// Now, most of the time synchronous code is fine and makes perfect sense. But imagine that execution would have to wait for example, for a five second timer to finish.
// That would just be terrible, right? Because meanwhile, nothing on the page would work during these five seconds. And so that's where asynchronous code comes into play.

// 👉 Asynchronous code is executed after a task that runs in the "background" finishes;
// 👍 Asynchronous code is non-blocking;
// 👉 Execution doesn't wait for an asynchronous task(e.g. timer) to finish it's work; // e.g. Example Given, i.e. - In Essence, In other words

// So in summary, asynchronous programming is all about coordinating the behavior of our program over a certain period of time. And this is essential to understand.
// We deferred an action into the future making the code asynchronous and non-blocking.
// Callback functions alone don't make code asynchronous, that's essential to keep in mind.

// img.src - is implemented in a asynchronous way 👍

// Event listeners alone don't make code asynchronous, just like callback functions alone, do also not make code asynchronous.
// Example: an event listener listening for a click on a button is not doing any work in the background. It's simply waiting for a click to happen, but it's not doing anything.
// No asynchronous behavior involved at all.

// AJAX (Asynchronous JavaScript And XML) basically allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.
// Let's say that we have our JavaScript application running in the browser, which is also called the Client. And we want the application to get some data from a web server. And let's say
// the data about countries. So with AJAX, we can do an HTTP request to the server, which has this data. And the server will then send back a response containing that data that we requested.
// And this back and forth between Client and Server all happens asynchronously in the background, just the way we learned before.
// And there can even be different types of requests, like GET requests to receive data or POST requests to send data to a server.
// When we're asking a server to send us some data, this server usually contains a web API. And this API is the one that has the data that we're asking for. So an API is something pretty
// important, and so let's now see what an API and web APIs actually are.

// API stands for Application Programming Interface. In general terms and on the very high level of obstruction, an API is basically a piece of software that can be used by another piece
// of software, in order to allow applications to talk to each other and exchange information and that's true not only for web development and JavaScript, but for programming in general;

// In JavaScript there are countless types of APIs, like the DOM API, Geolocation API that we have been using.
// Also, we can always implement a small and simple API in a class where we make some methods available as a public interface. So objects made from a class can be seen as self-contained
// encapsulated pieces of software that other pieces of software can interact with.

// "Online" API (the term that Jonas came up with) is essentially an application running on a web server, that receives requests for data, then retrieves this data from some database and then
// sends it back to the client.

// We can build our own web APIs (requires back-end development, e.g. with node.js) or use 3rd-party APIs.

// Travel application:
// 3-rd party APIs:
// weather data
// data about countries
// Flights data
// Currency conversion data
// APIs for sending email or SMS
// Google Maps
// Millions of possibilities

// The possibitilies are really endless with APIs, and we can even say that APIs is what made the modern web as you know it possibly in the first place.
// XML is a data format, which used tobe widely used to transmit data on the web. However, these days basically no API uses XML data anymore. The term AJAX is just an old name
// that got very popular back in the day, and so it's still used today, even though we don't use XML anymore. So instead, most APIs these days use the JSON data format.
// So JSON is the most popular data format today because it's basically just a JavaScript object, but converted to a string.

// OLD SCHOOL ONE(XMLHttpRequest)

const request = new XMLHttpRequest();
request.open('GET', ''); // type,
