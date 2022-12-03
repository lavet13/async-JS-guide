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

// Now this can create problems when line of code takes a long time to run. For example, we have an alert statement
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

// OLD SCHOOL(XMLHttpRequest)
// https://restcountries.com/#api-endpoints-v2-all

/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`); // type, url
    request.send(); // send off the request so that request then fetches the data in the background, and then once that is done, it will emit the load event,

    // console.log(request.responseText); // nothing as expected

    // as soon as the data arrives callback function will be called
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const {
            flag,
            region,
            name: countryName,
            population,
            currencies,
            languages,
        } = data;

        const [cur] = currencies;
        const [lang] = languages;

        countriesContainer.style.opacity = 1;
        countriesContainer.insertAdjacentHTML(
            'beforeend',
            `
        <article class="country">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +population / 1_000_000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${lang.name}</p>
                <p class="country__row"><span>💰</span>${cur.name}</p>
            </div>
        </article>
    `
        );
    });
};

getCountryData('russian');
getCountryData('usa');
getCountryData('germany');
*/

///////////////////////////////////////////////////////////////////////////////////
// How the Web Works_ Requests and Responses
// Whenever we try to access a Web server, the browser which is the client, sends a request to the server and the server will then send back a response
// and that response contains the data or the Web page that we requested. And that's right, this process works the exact same way no matter if we're accessing
// an entire Web page or just some data from a Web API.
// And this whole process actually has a name and it's called the Request-response model or also the Client-server architecture.

// Domain name is actually not the real address of the server that we're trying to access. It's really just a nice name that is easy for us to memorize.
// But what this means is that we need a way of kind of converting the domain name to the real address of the server. And that happens through a so-called DNS.
// So DNS stands for domain name server and domain name servers are a special kind of server. So they are basically like the phone books of the Internet.
// So the first step that happens when we access any Web server is that the browser makes a request to a DNS and this special server will then simply match the
// web address of the URL to the server's real IP address. Actually this all happens through your Internet service provider, but the complete details don't really
// matter here. What you need to retain from this first part is that the domain is not the real address and that a DNS will convert the domain to the real IP address.
// And then after the real IP address has been sent back to the browser, we can finally call it. So this is how the real address looks like (https://104.27.142.889:443)
// So it still has the protocol, but then comes the IP address. And also the port that we access on the server. And this port number is really just to identify a specific
// service that's running on a server. So you can think of it like a sub address. This port number has nothing to do with the /rest/v2 resource that we want to access.
// So that resource will actually be sent over in the HTTP request as we will see in a moment.

// So once(поскольку) we have the real IP address, a TCP socket connection is established between the browser and the server. And so they are now finally connected.
// And this connection is typically kept alive for the entire time that it takes to transfer all files of the Website or all data. Now what are TCP and IP?
// Well TCP is the Transmission Control Protocol. And IP is the Internet Protocol. And together they are communication protocols that define exactly how data travels across
// the Web.
// Now it's time to finally make our request. And the request that we make is an HTTP request, where HTTP stands for Hypertext Transfer Protocol. So after TCP/IP, HTTP is another
// communication protocol. And by the way, a communication protocol is simply a system of rules that allows two or more parties to communicate. Now in case of HTTP, it's just
// a protocol that allows clients and Web servers to communicate. And that works by sending requests and response messages from client to server and back.

// Now a request message will look something like this. (e.g. https://restcountries.com/v2/name/russian)

/*
GET /v2/name/russian HTTP/1.1      start line: HTTP method + request target + HTTP version
                                           So about the HTTP methods, there are many available, but the most important ones are: GET, for simply requesting data,
                                           POST, for sending data and PUT and PATCH, to basically modify data.

                                           Now, if the request target was empty, so if it was just a slash basically then we would be accessing the website's route, 
                                           which is just https://restcountries.com/

Next part of the request are request headers, which is just some information that we sent about the request ifself. There are tons of standard different headers,
like what browser is used to make the request, at what time, the user's language and many, many more.

HOST: www.google.com
User-Agent: Mozilla/5.0 
Accept-Language: en-US

Now finally, in the case, we're sending data to the server. There will also be a request body, and that body will contain the data that we're sending, for example
coming from an HTML form. So that is the HTTP request. And I hope that it makes sense to you.

<BODY>

Now, of course, it's not us developers who manually write these HTTP requests, but it's still helpful and valuable that you understand what an HTTP request 
and also a response look like. Also, I want to mention that there's also HTTPS as you probably know. And the main difference between HTTP and HTTPS
is that HTTPS is encrypted using TLS or SSL which are yet some are protocols, but I'm not gonna bore you with these. But besides that, the logic behind HTTP requests
and responses still applies to HTTPS.


So our request is formed and now it hits the server, which will then be working on it until it has our data or Web page ready to send back. And once it's ready, it will
send it back using as you can guess, an HTTP response. And the HTTP response message actually looks quite similar to the request. So also with a start line, headers
and a body.

HTTP/1.1 200 OK                           start line: HTTP version + status code + status message(these are used to let the client know whether the request has been
                                          successful or failed. For example, 200 means, okay. And the status code that everyone knows is 404 which means page not found.
                                          So that is where this 404 code, that everyone already knew comes from.

Then the response headers are information about the response itself. So just like before, and there are a ton available and we can also make up our own actually.

Date: Fri, 18 Jan 2022
Content-Type: text/html
Transfer-Encoding: chunked

Last part of the response is again, the body which is present in most responses, and this body usually contains the JSON data coming back from an API or the HTML of the 
Web page that we requested or something like that.

<BODY>

*/

// But in our imaginary example, we only just did one request to https://restcountries.com/v2/name/russian and got one response back. And that's how it's gonna work when
// all we do is to access an API. However, if it's a Web page that we're accessing, then there will be many more requests and responses. And that's because when we do
// the first request, all we get back is just the initial HTML file. That HTML file will then get scanned by the browser for all the assets that it needs in order to
// build the entire Web page like JavaScript, CSS files, image files, or other assets and then for each different file, there will be a new HTTP request made to the server.
// So basically this entire back and forth between client and server happens for every single file that is included in the Web page. However, there can be multiple requests
// and responses happening at the same time, but the amount is still limited because otherwise the connection would start to slow down. But anyway, when all the files
// have finally arrived, then the Web page can be rendered in the browser according to the HTML, CSS and JavaScript specifications that you already know.

// Now, as a final piece of the puzzle, let's talk about TCP/IP and figure out how this request and response data is actually sent across the Web.
// So we said before that TCP and IP are the communication protocols that define how data travels across the Web. Now I'm not gonna go into a lot of details here
// but here is what you need to know. So first the job of TCP is to break the requests and responses down into thousands of small chunks, called packets before they are
// sent. Once the small packets arrive at their final destination, TCP will reassemble all the packets into the original request or response. And this is necessary
// so that each packet can take a different route through the Internet. Because this way the message arrives at the destination as quick as possible, which would not be
// possible if we sent the entire data simply as a big chunk. So that would be like trying to go through dense traffic with like the biggest bus that you can imagine.
// So probably not a good idea. Now, as a second part, the job of the IP protocol is to actually send and route these packets through the Internet. So it ensures that
// they arrive at the destination they should go, using IP addresses on each packet. Okay, and that's it.

/*
const renderCountry = function (
    { flag, countryName, region, population, lang, cur },
    className = ''
) {
    countriesContainer.insertAdjacentHTML(
        'beforeend',
        `
        <article class="country ${className}">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +population / 1_000_000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${lang}</p>
                <p class="country__row"><span>💰</span>${cur}</p>
            </div>
        </article>
    `
    );
};

const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`); // type, url
    request.send(); // send off the request so that request then fetches the data in the background, and then once that is done, it will emit the load event,

    // console.log(request.responseText); // nothing as expected

    // as soon as the data arrives callback function will be called
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(this);

        const {
            flag,
            region,
            name: countryName,
            population,
            currencies,
            languages,
            borders,
        } = data;

        const [cur] = currencies;
        const [lang] = languages;

        countriesContainer.style.opacity = 1;

        // Render country (1)
        renderCountry({
            flag,
            countryName,
            region,
            population,
            lang: lang.name,
            cur: cur.name,
        });

        // Get neighbour country (2)
        const [anyNeighbour] = borders;

        if (!anyNeighbour) return;

        for (const neighbour of borders) {
            // AJAX call country 2
            const request2 = new XMLHttpRequest();
            request2.open(
                'GET',
                `https://restcountries.com/v2/alpha/${neighbour}`
            ); // type, url
            request2.send(); // send off the request so that request then fetches the data in the background, and then once that is done, it will emit the load event,

            request2.addEventListener('load', function () {
                const data = JSON.parse(this.responseText);

                const {
                    flag,
                    region,
                    name: countryName,
                    population,
                    currencies,
                    languages,
                    borders,
                } = data;

                const [cur] = currencies;
                const [lang] = languages;

                renderCountry(
                    {
                        flag,
                        countryName,
                        region,
                        population,
                        lang: lang.name,
                        cur: cur.name,
                    },
                    'neighbour'
                );
            });
        }
    });
};

getCountryAndNeighbour('russian');
getCountryAndNeighbour('usa');

// callback hell, it makes our code look very messy. But even more important, it makes our code harder to maintain, and very difficult to understand and to reason about
// and code that is hard to understand and difficult to reason about will have more bugs, and it's just worse code. So this is a great rule that you should always remember
// and keep in mind. Code that's hard to understand is basically bad code, because it will have more bugs because the harder it is to understand code and to reason about
// the code, the more difficult it will be to add new features and to add more functionality to the application. But anyway, given all these problems with callback hell,
// we of course, need a way to solve callback hell and fortunately for us, since ES6, there is actually a way of escaping callback hell by using something called promises.
// And so let's now take the next step in our journey of asynchronous JavaScript which is to learn all about promises.

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

*/

/*
///////////////////////////////////////////////////////////
// Promises and the Fetch API
// So the formal definition of a promise is that it's an object that is used basically as a placeholder for the future result of an asynchronous operation
// And if that sounds weird to you, we can also say that a promise is like a container for an asynchronously delivered value or even less formal. Let's say
// that a promise is a container for a future value. So there you go. That's the most distilled down definition of what a promise is. So a container or a placeholder
// for a future value, and the perfect example of a future value is the response coming from an AJAX call. So when we start the AJAX call, there is no value yet,
// but we know that there will be some value in the future. And so we can use a promise to handle this future value. To understand this concept even better, I like
// to use the analogy of a lottery ticket. So a promise is just like a lottery ticket. So when I buy a lottery ticket, essentially I buy the promise that I will receive
// some amount of money in the future if I guess the correct outcome. So I buy the ticket now with the prospect of winning money in the future and the lottery draw
// which determines if I get the money or not happens asynchronously. So of course I don't have to drop everything and keep waiting until the lottery draw happens.
// Now, in case I did get the correct outcome, then I will receive my money because I have my lottery ticket, which is the promise that I bought. Now, what's the big
// advantage of using promises? Well, there are two of them actually, first by using promises, we no longer need to rely on events and callback functions to handle
// asynchronous results, events and callback functions can sometimes cause(может вызвать, привести) unpredictable results. And so this is a big win already, but even
// better with promises, we can chain promises for a sequence of asynchronous operations instead of nesting. And with this, we can finally escape callback hell which was
// our initial goal all along and by the way, promises are an ES6 feature. So they became available in JavaScript in 2015. And so by now, they are widely used by everyone
// Now, since promises work with asynchronous operations, they are time sensitive. So they change over time. And so promises can be in different states and this is
// what they call the life cycle of a promise. So in the very beginning we say that a promise is pending. And so this is before any value resulting from the asynchronous
// task is available. Now, during this time, the asynchronous task is still doing it's work in the background. Then when the task finally finishes, we say that the
// promise is settled(установился, устоявшийся) and there are two different types of settled promises and that's fulfilled(выполненные) promises and
// rejected(отклоненный) promises. So a fulfilled promise is a promise that has successfully resulted in a value(успешно привело к зн-ю) just as we expect it.
// For example, when we use the promise to fetch data from an API, a fulfilled promise successfully got that data and it's now available to being used. On the other hand,
// a rejected promise means that there has been an error during the asynchronous task. And example of fetching data from an API, an error would be for example when the
// user is offline and can't connect to the API server. Now going back to the analogy of our lottery ticket, the lottery draw is basically the asynchronous task which
// determines the result. Then once the result is available, the ticket would be settled. Then if we guessed the correct outcome, the lottery ticket will be fulfilled
// and we get our money. However, if we guessed wrong, then the ticket basically gets rejected. And all we did was waste our money. Now these different states are very
// important to understand because when we use promises in our code, we will be able to handle these different states in order to do something as a result of either
// a successful promise or a rejected one. Another important thing about promises is that a promise is only settled once. And so from there, the state will remain
// unchanged forever. So the promise was either fulfilled or rejected, but it's impossible to change that state. Now, these different states that I showed you here
// are relevant and useful when we use a promise to get a result, which is called to consume(потреблять) a promise. So we consume a promise when we already have a promise,
// for example, the promise that was returned from the fetch function. But in order for a promise to exist in the first place, it must first be built.
// So it must be created in the case of the fetch API, it's the fetch function that builds the promise and returns it for us to consume. So in this case, we don't have to
// build the promise ourselves in order to consume it. Now, most of the time we will actually just consume promises, which is also the easier and more useful part.
// But sometimes we also need to build a promise and not just consume it.

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/russian`); // type, url
// request.send(); // send off the request so that request then fetches the data in the background, and then once that is done, it will emit the load event,

// request.addEventListener('load', function () {
//      code...
//      console.log(this.responseText); // json string
//      console.log(JSON.parse(this.responseText));
// });

// console.log(request.responseText); // nothing as expected

const request = fetch(`https://restcountries.com/v2/name/russian`); // fetch API, simple GET request, getting immediately promise
request
    .then(response => {
        return response.json();
    })
    .then(data => {
        const [obj] = data;
        console.log(obj);
        return data;
    });
*/

/*
/////////////////////////////////////////////////////////////////////////////

const renderCountry = function (
    { flag, countryName, region, population, lang, cur },
    className = ''
) {
    countriesContainer.insertAdjacentHTML(
        'beforeend',
        `
        <article class="country ${className}">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +population / 1_000_000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${lang}</p>
                <p class="country__row"><span>💰</span>${cur}</p>
            </div>
        </article>
    `
    );
};

const getCountryData = async function (country) {
    const response = await fetch(
        `https://restcountries.com/v2/name/${country}`
    ); // immediately return a promise <pending>

    // the promise is actually fulfilled or rejected so as soon as the result is available
    // request
    // .then(function (response) {
    // console.log('keys');
    // console.log([...response.headers.keys()]);
    // console.log('values');
    // console.log([...response.headers.values()]);
    // console.log([...response.headers]);

    // actual data
    // return response.json(); // promise, this method is available on all response objects that is coming from the fetch function, so all of the resolved values
    // and indeed this response here is in fact a resolved value.
    // Now, the problem is that this json function itself is actually also an asynchronous function and so what that means is that it will also return a new
    // promise. And that's all a bit confusing and I really don't know why it was implemented like this, but this is just how it works.
    // })
    const data = await response.json();

    const [obj] = data;
    console.log(obj);

    const {
        flag,
        region,
        name: countryName,
        population,
        currencies,
        languages,
        borders,
    } = obj;

    const [cur] = currencies;
    const [lang] = languages;

    countriesContainer.style.opacity = 1;

    renderCountry({
        flag,
        countryName,
        region,
        population,
        lang: lang.name,
        cur: cur.name,
    });

    const [anyNeighbour] = borders;

    if (!anyNeighbour) return;

    for (const neighbour of borders) {
        (async () => {
            const response2 = await fetch(
                `https://restcountries.com/v2/alpha/${neighbour}`
            );

            const obj = await response2.json();

            const {
                flag,
                region,
                name: countryName,
                population,
                currencies,
                languages,
            } = obj;

            const [cur] = currencies;
            const [lang] = languages;

            renderCountry(
                {
                    flag,
                    countryName,
                    region,
                    population,
                    lang: lang.name,
                    cur: cur.name,
                },
                'neighbour'
            );
        })();
    }
};

getCountryData('russian')
    .then(async () => {
        return getCountryData('usa');
    })
    .then(async () => {
        return getCountryData('portugal');
    })
    .then(async () => {
        return getCountryData('germany');
    })
    .then(async () => {
        return getCountryData('china');
    });
*/

//////////////////////////////////////////////////
// Handling Rejected Promises
/*
const renderError = function (msg) {
    countriesContainer.removeChild(countriesContainer.lastChild);
    countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (
    { flag, countryName, region, population, lang, cur },
    className = ''
) {
    countriesContainer.insertAdjacentHTML(
        'beforeend',
        `
        <article class="country ${className}">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +population / 1_000_000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${lang}</p>
                <p class="country__row"><span>💰</span>${cur}</p>
            </div>
        </article>
    `
    );
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

// const getCountryData = function (country) {
//     // the promise is fulfilled even if we passing random chars in argument "country" which is bad, we must fix that
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(
//             response => {
//                 if (!response.ok)
//                     throw new Error(
//                         `Country not found (${response.status}) 😐`
//                     ); // the promise is returned as a rejected promise by "then" handler here and terminated as return keyword
//                 // that rejection will then propagate all the way down to the catch handler, which we already have set up here.

//                 return response.json();
//             }
//             // err => alert(err)
//         )
//         .then(data => {
//             const [obj] = data;
//             console.log(obj);

//             const {
//                 flag,
//                 region,
//                 name: countryName,
//                 population,
//                 currencies,
//                 languages,
//                 borders,
//             } = obj;

//             const [cur] = currencies;
//             const [lang] = languages;

//             countriesContainer.style.opacity = 1;

//             renderCountry({
//                 flag,
//                 countryName,
//                 region,
//                 population,
//                 lang: lang.name,
//                 cur: cur.name,
//             });

//             let [anyNeighbour] = borders;
//             anyNeighbour = 'adfsdfsd';

//             if (!anyNeighbour) return;

//             return fetch(`https://restcountries.com/v2/alpha/${anyNeighbour}`);
//         })
//         .then(
//             response => {
//                 if (!response.ok)
//                     throw new Error(`Country not found (${response.status})`);
//                 return response.json();
//             }
//             // err => alert(err)
//         )
//         .then(obj => {
//             const {
//                 flag,
//                 region,
//                 name: countryName,
//                 population,
//                 currencies,
//                 languages,
//             } = obj;

//             const [cur] = currencies;
//             const [lang] = languages;

//             renderCountry(
//                 {
//                     flag,
//                     countryName,
//                     region,
//                     population,
//                     lang: lang.name,
//                     cur: cur.name,
//                 },
//                 'neighbour'
//             );
//         })
//         .catch(err => {
//             // catch method will catch any errors that occur in any place in the whole promise chain and no matter where that is
//             // so errors basically propogate down the chain until they are caught and only if they're not caught anywhere then we get that Uncaught error
//             console.error(`${err.message} 🔥`);
//             renderError(`Something went wrong 🔥🔥 ${err.message}. Try later!`);
//         })
//         .finally(() => {
//             // the callback here will always be called whatever happens with the promise. So no matter if the promise is fulfilled or rejected this callback function
//             // that we define here is gonna be called always.
//             // good example of that is to hide a loading spinner like these rotating circles that you see everywhere
//             // that works because catch itself is also returns a promise
//             countriesContainer.style.opacity = 1; // happens no matter if the promise is fulfilled or rejected
//         });
// };

const getCountryData = function (country) {
    // the promise is fulfilled even if we passing random chars in argument "country" which is bad, we must fix that
    getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
        .then(data => {
            const [obj] = data;
            console.log(obj);

            const {
                flag,
                region,
                name: countryName,
                population,
                currencies,
                languages,
                borders,
            } = obj;

            const [cur] = currencies;
            const [lang] = languages;

            countriesContainer.style.opacity = 1;

            renderCountry({
                flag,
                countryName,
                region,
                population,
                lang: lang.name,
                cur: cur.name,
            });

            if (!borders) throw new Error('No neighbour found!');
            const [anyNeighbour] = borders;

            return getJSON(
                `https://restcountries.com/v2/alpha/${anyNeighbour}`,
                `Country not found`
            );
        })
        .then(obj => {
            console.log(obj);
            const {
                flag,
                region,
                name: countryName,
                population,
                currencies,
                languages,
            } = obj;

            const [cur] = currencies;
            const [lang] = languages;

            renderCountry(
                {
                    flag,
                    countryName,
                    region,
                    population,
                    lang: lang.name,
                    cur: cur.name,
                },
                'neighbour'
            );
        })
        .catch(err => {
            // catch method will catch any errors that occur in any place in the whole promise chain and no matter where that is
            // so errors basically propogate down the chain until they are caught and only if they're not caught anywhere then we get that Uncaught error
            console.error(`${err.message} 🔥`);
            renderError(`Something went wrong 🔥🔥 ${err.message}. Try later!`);
        })
        .finally(() => {
            // the callback here will always be called whatever happens with the promise. So no matter if the promise is fulfilled or rejected this callback function
            // that we define here is gonna be called always.
            // good example of that is to hide a loading spinner like these rotating circles that you see everywhere
            // that works because catch itself is also returns a promise
            countriesContainer.style.opacity = 1; // happens no matter if the promise is fulfilled or rejected
        });
};

btn.addEventListener('click', function () {
    // getCountryData('portugal');
    getCountryData('australia');
});

// getCountryData('dafsdfdas');
*/

///////////////////////////////////////////////////////
// Coding Challenge #1
/*
Coding Challenge #1

In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time �

Your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).

2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating �

3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”

4. Chain a .catch method to the end of the promise chain and log errors to the
console

5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message

PART 2

6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.

7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)
The Complete JavaScript Course 31

Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474

GOOD LUCK �
*/

/*
const renderError = function (msg) {
    countriesContainer.removeChild(countriesContainer.lastChild);
    countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (
    { flag, countryName, region, population, lang, cur },
    className = ''
) {
    countriesContainer.insertAdjacentHTML(
        'beforeend',
        `
        <article class="country ${className}">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +population / 1_000_000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${lang}</p>
                <p class="country__row"><span>💰</span>${cur}</p>
            </div>
        </article>
    `
    );
};

const whereAmI = function (lat, lng) {
    fetch(
        `https://geocode.xyz/${lat},${lng}?json=1&auth=56293066284436484796x58855`
    )
        .then(res => {
            if (!res.ok)
                throw new Error(`Problem with geocoding ${res.status}`);

            return res.json();
        })
        .then(data => {
            const { city, country } = data;
            console.log(`You are in ${city}, ${country}`);

            return fetch(`https://restcountries.com/v2/name/${country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found! ${res.status}`);

            return res.json();
        })
        .then(data => {
            const [obj] = data;
            console.log(obj);

            const {
                flag,
                region,
                name: countryName,
                population,
                currencies,
                languages,
            } = obj;

            const [cur] = currencies;
            const [lang] = languages;

            renderCountry({
                flag,
                countryName,
                region,
                population,
                lang: lang.name,
                cur: cur.name,
            });
        })
        .catch(err => {
            console.error(err.message);
            renderError(err.message);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

///////////////////////////////////////////////////
// Asynchronous Behind the Scenes_ The Event Loop
// JavaScript runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code. Now, the heart of every JavaScript
// runtime is the engine. So, this is where code is actually executed(call stack) and where objects are stored in memory(heap). What's important to note here is that
// JavaScript has only one thread of execution. And so it can only do one thing at a time. There is absolutely no multitasking happening in JavaScript itself.
// Now, other languages like Java can execute multiple pieces of code at the same time, but not JavaScript.
// Next, we have the web APIs environment. These are some APIs provided to the engine, but which are actually not part of the JavaScript language itself.
// So, that's things like the DOM, timers, the fetch API, the geolocation API, and so on and so forth.
// Next up, there is the calback queue and this is a data structure that holds all the ready to be executed callback functions that are attached to some event that
// has occured.
// Finally, whenever the call stack is empty the event loop takes callbacks from the callback queue and puts them into call stack so that they can be executed.
// So the event loop is the essential piece that makes asynchronous behavior possible in JavaScript. It's the reason why we can have a non blocking concurrency model in
// JavaScript. And a concurrency model is simply how a language handles multiple things happening at the same time. But now how does this non-blocking concurrency actually
// work? And why is the event loop so important?

// Essential parts of the runtime: call stack, event loop, web APIs, and the callback queue.

// JavaScript is a built around the idea of a single thread. But if there was only one thread of execution in the engine then how can asynchronous code be executed
// in a non-blocking way? Well, that's actually the big question that we're gonna answer.

// el = document.querySelector('img');
// el.src = 'dog.jpg';
// el.addEventListener('load', function () {
//      el.classList.add('fadeIn');
// });
// fetch('https://someurl.com/api').then(res => console.log(res));

// el.src = 'dog.jpg';

// if we set the source attribute of that image to dog.jpg, we will start to load this image asynchronously in the background. But this time we can actually understand
// what that mysterious background actually is. So, as you already know everything related to the DOM, is not really part of JavaScript, but the part of the web APIs.
// And so it's in a web APIs environment where the asynchronous tasks related to the DOM will run. And in fact, the same is true for timers, AJAX calls and really all other
// asynchronous tasks. So, again, these asynchronous tasks will all run in the web API environment of the browser. Now, if the image would be loading in a synchronous way
// it would be doing so right in the call stack, blocking the execution of the rest of the code. But, as we already learned, that would be terrible, and that's why loading
// images in JavaScript is asynchronous. So it doesn't happen in the call stack. So, not in the main thread of execution, but really in the web APIs environment as I
// mentioned before. Now, if we want to do something after the image has finished loading, then we need to listen to the load event. And so that's exactly what we do in
// the next line of code.

// el.addEventListener('load', function () { el.classList.add('fadeIn'); });

// So, here we attach an event listener to the load event of that image and pass in a callback function as always. In practice, this means to register this callback in the
// web APIs environment, exactly where the image is loading and the callback will stay there until the load event is emitted.
// And so in the next line we make an AJAX call using the fetch API.

// fetch('https://someurl.com/api').then(res => console.log(res));
// And as always the asynchronous fetch operation will happen in the web APIs environment. And again, that's because otherwise we would be blocking the call stack and
// create a huge lag in our application. Finally, we use the "then" method on the promise returned by the fetch function. And this will also register a callback in the
// web APIs environment so that we can react to the future resolved value of the promise. So this callback is associated with a promise that is fetching the data
// from the API. And that's gonna be important later on. So, with this, we have now executed all the top level of code. So, all the code that is not inside any callback
// function in asynchronous way. We also have the image loading in the background and some data is being fetched from an API. And so now it's time for this to get
// really interesting.

// Let's say the image has finished loading and therefore the load event is emitted on that image. What happens next, is that the callback for this event is put into
// callback queue. And the callback queue is basically an ordered list of all the callback functions that are in line to be executed. And you can think of this callback
// queue, like as a todo list that you would write for yourself with all the tasks that you have to complete. So, the callback queue is also a todo list of a kind, but
// with tasks that the call stack will eventually have to complete. Now, in this example, there are no other callbacks in the queue yet, but there could be of course.
// So, if there were already other callbacks waiting in line, then this new callback would of course go straight to the end of the queue. And there it would sit patiently
// for it's turn to finally run. And this actually has big implications(последствия). So, imagine that you set a timer for five seconds. And so after five seconds
// that timer's callback will be put on the callback queue. And let's say there were already other callbacks awaiting. And let's also say that it took one second to run
// all of those callbacks. Then, in that case, your timers callback would only run after six seconds and not after five. So, these six seconds are the five seconds
// that passed for the timer, plus the one second that it took to run all the other callbacks that were already waiting in line in front of your timer. So, what this means
// is that the timers duration that you define is not a guarantee. The only guarantee is that the timers callback will not run before five seconds, but it might very
// well run after five seconds have passed. So, it all depends on the state of the callback queue. And also another queue that we're gonna learn about in a second.
// Now, another thing that's important to mention here is that the callback queue also contains callbacks coming from DOM events like clicks or key presses or whatever.
// Now, we learned before that DOM events are not really asynchronous behavior, but they still use the callback queue to run their attached callbacks. So, if a click
// happens on a button with addEventListener then what will happen is just like what I illustrated here with the asynchronous load event. But anyway now it's time to finish
// learn about the event loop.

// EVENT LOOP

// So, here is what the event loop does. It looks into the call stack and determines whether it's empty or not. Except of course for the global context, then if the stack
// is indeed empty which means that there's currently no code being executed then it will take the first callback from the callback queue and put it on the call stack
// to be executed. And this is called an event loop tick. So each time the event loop takes a callback from the callback queue. We say that there was an event loop tick.
// So, as we can see here the event loop has the extremely important task of doing coordination between the call stack and to callbacks in the callback queue.
// So, the event loop is basically who decides exactly when each callback is executed. We can also say that the event loop does the orchestration of this entire
// JavaScript runtime. Another thing that becomes clear from this whole explanation is that the JavaScript language itself has actually no sense of time.
// That's because everything that is asynchronous doesn't happen in the engine. It's the runtime who manages all the asynchronous behavior. And it's the event loop
// who decides which code will be executed next. But the engine itself simply executes whatever code it has given. Okay, so, this is of course, a lot to take in.

// recap: So, the image started loading asynchronously in the web APIs environment and not in the call stack. We then used addEventListener to attach a callback function
// to the image load event. And this callback is basically our asynchronous code. It's code that we deferred into the future because we only want to execute it once the
// image has loaded. And in the meantime, the rest of the code kept running. Now addEventListener did not put the callback directly in the callback queue. It simply
// registered the callback, which then kept waiting in the web APIs environment until the load event was fired off. Only then the environment put the callback into queue.
// Then while in the queue the callback kept waiting for the event loop to pick it up and put it on the call stack. And this happened as soon as the callback was first
// in line and the call stack was empty. And, that's it actually. So, all this happened so that the image did not have to load in the call stack, but in the background
// in a non-blocking way. So, in a nutshell, the web APIs environment, the callback queue and the event loop, all together, make it possible that asynchronous code can be
// executed in a non-blocking way even with only one thread of execution in the engine. Wow, that was already a lot to understand. But we're not done yet. Because we
// still have to fetch function getting data from the AJAX call in the background. And this is basically happening with a promise.

// Now with promises things work in a slightly different way which is why I included this promise example as well. So, let's say that the data has now finally arrived.
// And so the fetch is done. Now, callbacks related to promises like this one that we registered with the promises 'then' method. Do actually not go into the callback
// queue. So, again this callback that we still have here, which is coming from a promise will not be moved into the callback queue. Instead, callbacks of promises have
// a special queue for themselves, which is the so-called microtasks queue.

// MICROTASKS QUEUE: res => console.log(res)

// Now, what is special about the microtasks queue is that it basically has priority over the callback queue. So, at the end of an event loop tick, so after a callback
// has been taken from the callback queue, the event loop will check if there are any callbacks in the microtasks queue. And if there are, it will run all of them
// before it will run any more callbacks from the regular callback queue. And, by the way, we call these callbacks from promises microtasks. And therefore the name
// microtasks queue. And there are actually other microtasks but that's not relevant here. So going back to our example, currently, we actually do have a microtask
// sitting in a microtasks queue, the call stack is also empty. And therefore the event loop will now take this callback and put it in the call stack just like it does
// with callbacks from the callback queue. And it doesn't matter if the callback queue is empty or not. So, this would have worked the exact same way even if there were
// some callbacks in the callback queue. And again, that's because microtasks always have priority. In practice, this means that microtasks can basically cut in line
// before all other regular callbacks. Now, if one microtask adds a new microtask then that new microtask is also executed before any callbacks from the callback queue.
// And this means that the microtasks queue can essentially starve the callback queue. Because if we keep adding more and more microtasks, then callbacks in the
// callback queue can never execute.

// Now, this is usually never a problem, but I just wanted to mention this possibility here anyways, who knows maybe this will be an interview question for you someday.
// And if so, you'd now know the answer. But anyway, as you can hopefully see the idea of running asynchronous code with regular callbacks and with microtasks coming
// from promises is very similar. The only difference is that they go into different queues and that the event loop gives microtasks priority over regular calllbacks.

/////////////////////////////////////////////////////
// The Event Loop in Practice
/*
console.log('Test start');

setTimeout(() => {
    // callback in the callback queue. Callback that is in the callback queue should be executed as soon as there are no callbacks in the micro-tasks queue
    console.log('0 sec timer');
}, 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res)); // callback in the micro-tasks queue. Callback in micro-tasks queue should be executed first

Promise.resolve('Resolved promise 2').then(res => {
    // callback function takes a long time, so micro-task, it is not the asynchronous task itself.
    // So the promise itself will still be resolved immediately, but then the micro-task that it contains, so that it puts on the micro-tasks queue. That's the one
    // that will take a long time.
    for (let i = 0; i < 1000000000; i++) {}

    console.log(res);
});

// if one of the micro-tasks takes a long time to run, then the timer will actually be delayed and not run after 0 seconds. So instead it will run a little bit
// later just after the micro-task is actually done with it's work.

console.log('Test end');
*/

/*
///////////////////////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
    // as soon as the promise constructor runs, it will automatically execute this executor function that we pass in
    // as it executes this function here, it will do so by passing in two other arguments and those arguments are the resolve and reject functions
    // this executor function is the function which will contain the asynchronous behavior that we're trying to handle with the promise. So this executor function
    // should eventually produce a result value so the value that is basically gonna be the future value of the promise
    console.log('Lottery draw is happening');

    // we did actually encapsulate some asynchronous behavior into this promise. And so that's the whole point of promises in the first place
    // in practice, most of the time all we actually do is to consume promises. And we usually only built promises to basically wrap old callback based functions
    // into promises. And this is a process that we call promisifying. So basically promisifying means to convert callback based asynchronous behavior to promise
    // based.

    setTimeout(function () {
        if (Math.random() * 100 + 1 >= 50) {
            resolve('You WIN 😀'); // Into the resolve function we pass the fulfilled value of the promise so that it can later be consumed with the "then" method.
            // Again, whatever value we pass into the resolve function is gonna be the result of the promise that will be available in the "then" handler.
        } else {
            reject(new Error('You LOST your money 😂')); // mark this promise as rejected
        }
    }, 2000);

    // recap: we created an executor function which is gonna be called by this promise constructor as soon as it runs, so basically immediately, then
    // the promise calls this function and passes in the resolve and reject functions so that we can then use them to mark the promise as either resolved so as fulfilled
    // or as rejected. This promise is eventually going to move to either the fulfilled state or the rejected state. So we always need to make sure that the promise
    // ends up in one of these two states. And so now it's time to actually try this out by consuming this promise that we just built.
});

// lotteryPromise is going to be a promise object at this point, so as always we can call the "then" method, and then just like before, the "then" method needs a
// callback function that is going to be called with the resolved value of the promise.
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// i dunno what am i looking at
// const wait = function (seconds) {
//     return Promise.resolve(seconds).then(seconds => {
//         setTimeout(() => console.log(seconds), seconds * 1000);
//     });
// };

// wait(2);

// Promisifying setTimeout
const wait = function (seconds) {
    // this will then encapsulate the asynchronous operation even further
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
};

// This is exactly what we did before, when we wanted to chain two sequential Ajax calls using the fetch function. So in the result of the first fetch, we would
// create a new fetch and return it.
wait(1)
    .then(seconds => {
        console.log(`1 second passed`);
        return wait(1);
    })
    .then(seconds => {
        console.log(`2 seconds passed`);
        return wait(1);
    })
    .then(seconds => {
        console.log(`3 seconds passed`);
        return wait(1);
    })
    .then(seconds => {
        console.log(`4 seconds passed`);
    });

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//             setTimeout(() => {
//                 console.log('4 seconds passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// There is also actually a way to very easy create a fulfilled or a rejected promise immediately
// Again, the difference is that this one here will resolve immediately, no matter what we pass in
Promise.resolve('Hello').then(string => console.log(string)); // static method on the promise constructor
Promise.reject(new Error('Bye')).catch(string => console.error(string));
*/

//////////////////////////////////////////////////////////////
// Promisifying the Geolocation API

// getCurrentPosition basically offloaded it's work to the background so to the web API environment in the browser and then immediately it moved on to the next line
// So this is very clearly a callback based API, so we have to pass in these different callbacks and so this is another great opportunity to promisify a callback
// based API to a promise based API

const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const renderError = function (msg) {
    countriesContainer.removeChild(countriesContainer.lastChild);
    countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (
    { flag, countryName, region, population, lang, cur },
    className = ''
) {
    countriesContainer.insertAdjacentHTML(
        'beforeend',
        `
        <article class="country ${className}">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +population / 1_000_000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${lang}</p>
                <p class="country__row"><span>💰</span>${cur}</p>
            </div>
        </article>
    `
    );
};

const whereAmI = function () {
    getPosition()
        .then(position => {
            const { latitude: lat, longitude: lng } = position.coords;

            return fetch(
                `https://geocode.xyz/${lat},${lng}?json=1&auth=56293066284436484796x58855`
            );
        })
        .then(res => {
            if (!res.ok)
                throw new Error(`Problem with geocoding ${res.status}`);

            return res.json();
        })
        .then(data => {
            const { city, country } = data;
            console.log(`You are in ${city}, ${country}`);

            return fetch(`https://restcountries.com/v2/name/${country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found! ${res.status}`);

            return res.json();
        })
        .then(data => {
            const [obj] = data;
            console.log(obj);

            const {
                flag,
                region,
                name: countryName,
                population,
                currencies,
                languages,
            } = obj;

            const [cur] = currencies;
            const [lang] = languages;

            renderCountry({
                flag,
                countryName,
                region,
                population,
                lang: lang.name,
                cur: cur.name,
            });
        })
        .catch(err => {
            console.error(err.message);
            renderError(err.message);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', whereAmI);
