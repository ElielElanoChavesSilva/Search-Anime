import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeModel } from './anime.module';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
constructor(private http: HttpClient) {}

  searchAnime(url:string): Observable<AnimeModel[]> {
    return this.http.get<AnimeModel[]>(url)
  }
}
