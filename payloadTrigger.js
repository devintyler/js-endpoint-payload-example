// Dancing Potato Example -
// http://docs.syncano.io/docs/webhooks#section-step-3-run-a-webhook-with-payload-args-
var request = require('request');

var url = "https://api.syncano.io/v1/instances/blue-pond-1563/webhooks/p/d66e885ce616e232d1230e6b0f1e3c6cc255582e/payloadexample/";
var payloadName = "user_search";
var payload = "dancing";
var payloadURL = url + "?" + payloadName + "=" + payload;

request.get(payloadURL, function(error, response, body){ // GET request
    if (!error && response.statusCode == 200){
        var bodyObj = JSON.parse(body);
        console.log(bodyObj.result.stdout);
    } else {
        console.log("Error: " + error);
    }
});

request({ // POST request
    url: url,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"' + payloadName + '":"' + payload + '"}'
}, function(error, response, body){
    if (!error && response.statusCode == 200) {
        var bodyObj = JSON.parse(body); // convert the string to a JSON
        console.log(bodyObj.result.stdout);
    } else {
        console.log("Error: " + error);
    }
});

//request({ // BOTH
//    url: payloadURL,
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json'
//    },
//    body: '{"' + payloadName + '":"This is your POST data!"}' //Set the body as a string
//}, function(error, response, body){
//    if (!error && response.statusCode == 200) {
//        var bodyObj = JSON.parse(body); // convert the string to a JSON
//        console.log(bodyObj.result.stdout);
//    } else {
//        console.log("Error: " + error);
//    }
//});