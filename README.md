# LIRI Bot

This is a command line app that queries the spotify API, OMDB API and Bands in Town API and neatly returns to users information about their requested film, band, or movie.

## Commands

The following are the commands that are applicable to this app.

### spotify-this-song

By running

```
node liri.js spotify-this-song <song>
```

you will be presented with the song name, artist, album, and a preview link for your requested song. Song is an optional argument, but if no song is specified, LIRI will default to All Star –– Smash Mouth. This queries the Spotify node API to return this information to the user. If a song is not found, the user will be notified that it cannot be found.

![alt text](https://github.com/kathdovi/LIRI-Bot/blob/master/spotify-this-song.png)

### concert-this

By running

```
node liri.js concert-this <band>
```

you will be presented with the upcoming concerts venues, cities, and dates for approaching concerts for a chosen artist. Band is an optional argument, but if no band is specified, LIRI will default to BROCKHAMPTION. This queries the Bands in Town Events API using Request to return this information to the user. If no upcoming concerts for a specific band are found, the user will be notified of this.

![alt text](https://github.com/kathdovi/LIRI-Bot/blob/master/concert-this.png)

### movie-this

By running

```
node liri.js movie-this <movie>
```

you will be presented with the movie title, year, IMDB and Rotten Tomatoes ratings (given they are returned by the API), country, language, plot, and actors for the selected movie. Movie is an optional argument, but if no movie is specified, LIRI will default to Mr. Nobody. This queries the OMDB API using Request to return this information to the user. If the movie cannot be found, the user will be presented with an error message.

![alt text](https://github.com/kathdovi/LIRI-Bot/blob/master/movie-this.png)

### do-what-it-says

By running

```
node liri.js do-what-it-says
```

LIRI Bot will run spotify-this-song for I Want it That Way. It reads the file random.txt and processes the commands in it (spotify-this-song, I Want it That Way) and runs it.

![alt text](https://github.com/kathdovi/LIRI-Bot/blob/master/do-what-it-says.png)


### command not found

If the command is not one of the ones specified above, the program will print a menu like so:

![alt text](https://github.com/kathdovi/LIRI-Bot/blob/master/invalid-command.png)


## Built With

* [node.js](https://nodejs.org/en/) - Javascript runtime environment
* [Request](https://www.npmjs.com/package/request) - For calling Bands in Town & OMDB APIs
* [Moment](https://www.npmjs.com/package/moment) - Used for date formatting
* [Chalk](https://www.npmjs.com/package/chalk) - For colors in terminal
* [Node Spotify API](https://www.npmjs.com/package/node-spotify-api) - For spotify-this-song feature
* [Bands in Town Events API](http://www.artists.bandsintown.com/bandsintown-api) - For concert-this feature
* [OMDB API](http://www.omdbapi.com/) - For movie-this feature


## Authors

* **Kathleen Doviken** - *Initial work* - [kathdovi](https://github.com/kathdovi)
