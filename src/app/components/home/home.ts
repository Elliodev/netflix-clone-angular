import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { MovieRow } from '../movie-row/movie-row';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, MovieRow],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
