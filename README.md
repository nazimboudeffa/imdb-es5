IMDB ES5
---

![GitHub package.json version](https://img.shields.io/github/package-json/v/nazimboudeffa/imdb-es5)

An ES5 NodeJS IMDB API for getting information on your favourite movies!

Based on the last ES5 version of https://github.com/mhsjlw/imdb

## Installing

Install via [npm](https://npmjs.com)

    $ npm install github:nazimboudeffa/imdb-es5

## Running / Building

To run the example:

    $ npm install
    $ node examples/movie.js

## API / Usage

Provide the IMDB ID and go! Also see the `examples/` folder for inspiration!

```javascript
var imdb = require('imdb-es5');

imdb('tt0110912', function(err, data) {
  if(err)
    console.log(err.stack);

  if(data)
    console.log(data);
});
```

This will return an object similar to this:

```
{
  title: 'Pulp Fiction',
  year: '1994',
  contentRating: 'N/A',
  runtime: '2h 34min',
  description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  rating: '8.9',
  poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg',
  genre: [ 'Crime', ' Drama ' ],
  director: 'N/A',
  metascore: '94',
  writer: 'N/A'
}
```
