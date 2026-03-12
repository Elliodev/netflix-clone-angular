import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { MovieRow } from './components/movie-row/movie-row';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, MovieRow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('netflix-clone');
}
