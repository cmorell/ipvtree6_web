'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var coap = require('coap');
var app = express();
var port = 3000;

/*
 * Use Handlebars for templating
 */
var exphbs = require('express3-handlebars');
var hbs;

// For gzip compression
app.use(express.compress());

/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
    // Set the default layout and locate layouts and partials
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: 'dist/views/layouts/',
        partialsDir: 'dist/views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/dist/views');
    
    // Locate the assets
    app.use(express.static(__dirname + '/dist/assets'));

} else {
    app.engine('handlebars', exphbs({
        // Default Layout and locate layouts and partials
        defaultLayout: 'main',
        layoutsDir: 'views/layouts/',
        partialsDir: 'views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/views');
    
    // Locate the assets
    app.use(express.static(__dirname + '/assets'));
}

// Set Handlebars
app.set('view engine', 'handlebars');



/*
 * Routes
 */
// Index Page
app.get('/', function(request, response, next) {
    response.render('index');
    
});

app.get('/bombetaOn', function(request, response, next) {

    var req = coap.request('coap://147.83.39.57/actuators/bulb?mode=on');

    console.log("IP request Addres:" + request.connection.remoteAddress + " on bulb")
     req.on('response', function(res) {        
        //console.log(res);
        res.on('end', function() {
        
        })
    })

    req.end();
    response.render('index');

});

app.get('/bombetaToggle', function(request, response, next) {

    var req = coap.request('coap://147.83.39.57/actuators/bulb?mode=toggle');

console.log("IP request Addres:" + request.connection.remoteAddress + " toggle bulb")
    req.on('response', function(res) {        
        //console.log(res);
        res.on('end', function() {
        
        })
    })

    req.end();
    response.render('index');

});

app.get('/bombetaToggle2', function(request, response, next) {

    var req = coap.request('coap://147.83.39.57/actuators/bulb?mode=toggle2');

console.log("IP request Addres:" + request.connection.remoteAddress + " toggle2 bulb")
     req.on('response', function(res) {        
        //console.log(res);
        res.on('end', function() {
        
        })
    })

    req.end();
    response.render('index');

});

app.get('/bombetaToggle3', function(request, response, next) {

    var req = coap.request('coap://147.83.39.57/actuators/bulb?mode=toggle3');

console.log("IP request Addres:" + request.connection.remoteAddress + " toggle3 bulb")
    req.on('response', function(res) {        
        //console.log(res);
        res.on('end', function() {
        
        })
    })

    req.end();
    response.render('index');

});

app.get('/bombetaOff', function(request, response, next) {

    var req = coap.request('coap://147.83.39.57/actuators/bulb?mode=off');
console.log("IP request Addres:" + request.connection.remoteAddress + " off bulb")

     req.on('response', function(res) {        
        //console.log(res);
        res.on('end', function() {
        
        })
    })

    req.end();
    response.render('index');

});
/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);