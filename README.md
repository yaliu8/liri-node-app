# liri-node-app

## Week 10 (LIRI Bot) Assignment

Created during Week 10 of UC Berkeley Coding Bootcamp. The challenge was to use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

- my-tweets
- spotify-this-song
- movie-this
- do-what-it-says

## Getting Started
- Clone down repo.
- Run command 'npm install' in Terminal or GitBash
- Create a .env file  add the following to it, replacing the values with your API keys (no quotes) once you have them:
```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```
- Get your Twitter API keys by following these steps:
        Step One: Visit <https://apps.twitter.com/app/new>
        Step Two: Fill out the form with dummy data. Type `http://google.com` in the Website input. Don't fill out the Callback URL input. Then submit the form.
        Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.
        Copy and paste them into your .env file, replacing the `your-twitter-consumer-key` and `your-twitter-consumer-secret` placeholders.
        Step Four: At the bottom of the page, click the `Create my access token` button to get your access token key and secret.
        Copy the access token key and secret displayed at the bottom of the next screen. Paste them into your .env file, replacing the placeholders for `your-twitter-access-token-key` and `your-twitter-access-token-secret`.

- Get your Spotify **client id** and **client secret** by following these steps:
        Step One: Visit <https://developer.spotify.com/my-applications/#!/>
        Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
        Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
        Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
    
- Run command 'node liri.js' or one of the commands below.

## What Each Command Does
### node liri.js my-tweets
- Displays my last 20 tweets and when they were created in terminal/bash window.

### node liri.js spotify-this-song <song name>
Shows the following information about the song in terminal/bash window.
- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from
- Or if no song is passed through, it will default to *"The Sign" by Ace of Base

### node liri.js movie-this <movie name>
Shows the following information in terminal/bash.
- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
- Rotten Tomatoes Rating.
- Rotten Tomatoes URL.
- Or if no movie is passed through, it will default to "Mr. Nobody"

### node liri.js do-what-it-says
Takes the text from random.txt and runs the song through spotify-this-song command

## Tech used
- Node.js
- Twitter NPM Package - https://www.npmjs.com/package/twitter
- Spotify NPM Package - https://www.npmjs.com/package/spotify
- Request NPM Package - https://www.npmjs.com/package/request
- OMDB API - http://www.omdbapi.com
- DotEnv - https://www.npmjs.com/package/dotenv

## Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/

## Built With
VS Code - Text Editor

## Authors
Alice Guillaume


