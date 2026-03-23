import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { Movie } from '../../services/movie';

@Component({
  selector: 'app-movie-row',
  imports: [],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.scss',
})
export class MovieRow implements OnInit {
  private movieService = inject(Movie);
  private cdr = inject(ChangeDetectorRef);

  @Input() title = '';
  @Input() movieType = '';
  @Input() isHorizontal = true;

  movies: any[] = [];

  ngOnInit(): void {
    this.movieService.getMovieByType(this.movieType).subscribe((res) => {
      setTimeout(() => {
        this.movies = res.results;

        this.cdr.detectChanges();
      }, 0);
    })
  }

  scroll(el: HTMLElement, direction: 'left' | 'right') {
  const step = el.clientWidth * 0.8; // On défile de 80% de la largeur visible
  const currentScroll = el.scrollLeft;
  const targetScroll = direction === 'left' ? currentScroll - step : currentScroll + step;

  el.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });
}
}
