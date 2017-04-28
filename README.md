# movie-chooser-server

***This project was created for purpose of knowledge transfer between its participants.***  

This server will proxy requests to [The Movie Database API](https://developers.themoviedb.org)

# Endpoints

[GET] http://162.243.3.92/api/random - mocked data  
[GET] http://162.243.3.92/api/choose - mocked data  

[GET] http://162.243.3.92/api/popular - Returns most popular movies by using [The Movie Database API](https://developers.themoviedb.org/3/movies/get-popular-movies)  

Response example:
```json
{ 
  "page": 1,
  "results": [{
    "poster_path": "\/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
    "adult": false,
    "overview": "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    "release_date": "2017-03-16",
    "genre_ids": [14, 10749],
    "id": 321612,
    "original_title": "Beauty and the Beast",
    "original_language": "en",
    "title": "Beauty and the Beast",
    "backdrop_path": "\/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
    "popularity": 122.533386,
    "vote_count": 2033,
    "video": false,
    "vote_average": 6.9
  }],
  "total_results": 19509,
  "total_pages": 976
}
```

# Contributing

To start project:
* `npm install`
* `npm run dev`
