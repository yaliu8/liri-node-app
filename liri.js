require('dotenv').config();
// Data taken from keys.js

var keys = require('./keys.js');

var request = require('request');
var twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');

// Load the user Spotify and Twitter keys

var spotifyKey= new Spotify({
id: keys.spotify.id,
    secret: keys.spotify.secret
});

var client = new twitter ({
            consumer_key: keys.twitter.consumer_key,
            consumer_secret: keys.twitter.consumer_secret,
            access_token_key: keys.twitter.access_token_key,
            access_token_secret: keys.twitter.access_token_secret
});


var action = process.argv[2];
var movieName = "Mr. Nobody";
var songName = "All My Hope";

if(process.argv[3] != null) {
    movieName = process.argv[3];
    songName = process.argv[3];   
}

switch(action) {
    case "my-tweets":
        tweets();
        break;
    
    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        doThing();
        break;
}

function tweets() {
    var screenName = { screen_name: 'AG53555041' };
    client.get('statuses/user_timeline', screenName, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                var date = tweets[i].created_at;
                console.log("@AG53555041: " + tweets[i].text + " Created At: " + date.substring(0, 19));
            }
        } else {
                console.log('Error');
               }
        });
    }

function spotify() {

    spotifyKey.search({ type: 'track', query: songName, limit: 1 })
    .then(function(response) {
    
    console.log("Artist Name: " + response.tracks.items[0].album.artists[0].name);
    console.log("Song Name: " + response.tracks.items[0].name);
    console.log("Song Preview Link: " + response.tracks.items[0].preview_url);
    console.log("Album Name: " + response.tracks.items[0].album.name);
  })
  .catch(function(err) {
    console.log(err);
  });
}

function movie() {
    request('http://www.omdbapi.com/?t=' + movieName + '&apikey=trilogy', function(error, response, body) {   
        if(error === null && response.statusCode === 200) {
            console.log("Movie Title: " + JSON.parse(body).Title + "\nYear: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).imdbRating + 
            "\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\nCountry: " + JSON.parse(body).Country + 
            "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors);
        } else {
            return console.log("error " + error);
        }
    });
}

function doThing() {
    fs.readFile('random.txt', 'utf8', (err, data) => {
        if(err) {
            return console.log("Error: " + err);
        } else {
            var doThingArray = data.split(',')
            process.argv[2] = doThingArray[0];
            songName = doThingArray[1];
            spotify();
        }
    });
}
