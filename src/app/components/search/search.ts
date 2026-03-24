import { Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../services/movie';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-search',
  imports: [Navbar],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  readonly movieService = inject(Movie);
  private activatedRouteService = inject(ActivatedRoute);

  movies: any[] = [];

  ngOnInit() {
    this.activatedRouteService.queryParams.subscribe(params => {
      const query = params['q'];
      this.movieService.searchMovies(query).subscribe(reponse => {
        this.movies = reponse.results;
      })
    });
  }
}
