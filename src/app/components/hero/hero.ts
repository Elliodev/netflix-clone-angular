import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { Movie } from '../../services/movie';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})

export class Hero implements OnInit {
  // Injecte le service ici
  private movieService = inject(Movie);
  private cdr = inject(ChangeDetectorRef);

  movie: any; // Pour stocker le film
  readonly imageUrl = environment.tmdbImageUrl; // URL de base pour les images

  ngOnInit(): void {
    // APPEL DU SERVICE ICI
    this.movieService.getTrendingMovies().subscribe((res) => {
      // Défi : Comment choisirais-tu un film AU HASARD dans le tableau res.results ?
      const films = res.results;
      this.movie = films[Math.floor(Math.random() * films.length)];

      this.cdr.detectChanges();
    })
  }
}
