import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/pages/content/content.component';
import { GenreComponent } from './components/pages/genre/genre.component';
import { MovieComponent } from './components/pages/movie/movie.component';

const routes: Routes = [
  { path: 'genre/:name/:id', component: GenreComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
