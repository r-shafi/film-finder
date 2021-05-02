import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(private route: ActivatedRoute, private tmdb: TmdbService) {}

  movie: any;
  bg = 'https://image.tmdb.org/t/p/original/';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.tmdb.getIndividualMovie(params.params.id).subscribe((data) => {
        console.log(data);
        this.movie = data;
      });
    });
  }
}
