import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
  apiKey = '1426684c151e5ca03cfd5a6952e73c46';
  moreURL = '&language=en-US&query=';
  restURL = '&page=1&include_adult=false';

  getMovies(query: string) {
    return this.http.get(
      `${this.baseURL}${this.apiKey}${this.moreURL}${query}${this.restURL}`
    );
  }

  getGenres() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`
    );
  }

  getMoviesOfGenre(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${id}`
    );
  }

  getIndividualMovie(movieId: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`
    );
  }

  /*
  getTrending() {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`
    );
  }

  actors() {
    return this.http.get(
      'https://api.themoviedb.org/3/person/popular?api_key=1426684c151e5ca03cfd5a6952e73c46&language=en-US&page=1'
    );
  }
  */
}
