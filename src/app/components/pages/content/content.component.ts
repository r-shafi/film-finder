import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  load = false;
  movies: any;
  imageURL = 'https://image.tmdb.org/t/p/w500';

  constructor(private tmdb: TmdbService) {}
  ngOnInit(): void {}

  update(event: any): any {
    if (event.target.value === '') {
      return null;
    }

    this.load = true;

    let query = event.target.value.split(' ').join('+');

    this.tmdb.getMovies(query).subscribe((data) => {
      this.movies = data;
    });
  }

  sortByRating() {
    this.movies.results.sort(
      (a: any, b: any) => b.vote_average - a.vote_average
    );
  }

  sortByRelease() {
    this.movies.results.sort(
      (a: any, b: any) =>
        new Date(`${b.release_date}`).getTime() -
        new Date(`${a.release_date}`).getTime()
    );
  }
}
