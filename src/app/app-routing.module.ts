import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/pages/content/content.component';
import { GenreComponent } from './components/pages/genre/genre.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MovieComponent } from './components/pages/movie/movie.component';
import { ProtectorGuard } from './services/protector.guard';

const routes: Routes = [
  {
    path: 'genre/:name/:id',
    component: GenreComponent,
    canActivate: [ProtectorGuard],
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    canActivate: [ProtectorGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: ContentComponent, canActivate: [ProtectorGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
