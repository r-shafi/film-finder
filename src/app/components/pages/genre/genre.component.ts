import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit {
  constructor(private route: ActivatedRoute, private tmdb: TmdbService) {}

  movies: any;
  imageURL = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) =>
      this.tmdb.getMoviesOfGenre(params.params.id).subscribe((data) => {
        this.movies = data;
      })
    );
  }
}
