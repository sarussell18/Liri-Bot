require("dotenv").config();

var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request")
var keys = require("./keys");

var action = process.argv[2];
var parameter = process.argv[3];
// labels to keep track of variables

function switchCase() {
  // Switch cases for ease of use
  switch (action) {

    case 'my-tweets':
      grabTweets();                   
      break;                          

    case 'spotify-this-song':
      grabSong();
      break;

    case 'movie-this':
      grabMovie();
      break;

    case 'do-what-it-says':
      grabReadme();
      break;

      default:                            // good idea from google in case a break is missed 
      console.log("Something Broke");
      break;

  }
};

function grabTweets() {
  console.log("Latest Tweets!");
  // loading keys from the other js file... was using personal twitter at first. Oops.
  var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  });

  var params = {
    screen_name: "Jordann50056855"
  };
  // Twittering the tweets
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    // Calling the get method and returning the Data
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        var returnedData = ('Number: ' + (i + 1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
        console.log(returnedData);
      }
    }
  });
};

function grabMovie() {
  console.log("My Favorite movie is Ghostbuters (the one from the 80's!)");

  var findMovie;
  // making sure a movie was entered, if not calling mr. nobody per instructions
  if (parameter === undefined) {
    findMovie = "Mr. Nobody";
  } else {
    findMovie = parameter;
  };

  var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=trilogy";

  console.log(queryUrl);
  // thanks old OMDB exercises
  request(queryUrl, function(err, res, body) {

    if (!err && res.statusCode === 200) {

      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value); 
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
};

function grabSong() {
  console.log("Tunes!");
  // looking for key in the other js file
  var spotify = new Spotify({
    id: keys.spotifyKeys.client_ID,
    secret: keys.spotifyKeys.client_secret
  });
  // if there was no song to search, pull up on of my faovrites
  var searchTrack;
  if (parameter === undefined) {
    searchTrack = "Digital Bath";
  } else {
    searchTrack = parameter;
  }
  // code copied from "npmjs node-spotify-api" site
  spotify.search({
    type: 'track',
    query: searchTrack
  }, function(error, data) {
    if (error) {
      console.log('Error occurred: ' + error);
      return;
    } else {
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("Preview: " + data.tracks.items[3].preview_url); 
    }
  });
};

function grabReadme() {
  // readFile exercise came in handy here
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    // Break it down and store it
    var output = data.split().splice(",");
    
    for (var i = 0; i < output.length; i++) {
      // print it all
      console.log(output[i]);
    }
  });
}
switchCase();