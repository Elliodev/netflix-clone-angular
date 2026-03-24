import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  private http = inject(HttpClient);

  getTrendingMovies(): Observable<any> {
    const url = `${environment.tmdbBaseUrl}/trending/all/week?api_key=${environment.tmdbApiKey}`;
    return this.http.get(url);
  }

  getMovieByType(type: string) {
    const url = `${environment.tmdbBaseUrl}${type}?api_key=${environment.tmdbApiKey}`;
    return this.http.get<any>(url);
  }

  searchMovies(query: string) {
    const url = `${environment.tmdbBaseUrl}/search/movie?api_key=${environment.tmdbApiKey}&query=${query}`;
    return this.http.get<any>(url);
  }
}
