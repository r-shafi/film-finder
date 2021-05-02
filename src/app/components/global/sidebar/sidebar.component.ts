import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private tmdb: TmdbService) {}

  genres: any;

  ngOnInit(): void {
    this.tmdb.getGenres().subscribe((data) => (this.genres = data));
  }
}
