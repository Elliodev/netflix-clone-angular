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
    const scrollAmount = 500;
    if (direction === 'left') {
      el.scrollLeft -= scrollAmount;
    } else {
      el.scrollLeft += scrollAmount;
    }
  }
}
