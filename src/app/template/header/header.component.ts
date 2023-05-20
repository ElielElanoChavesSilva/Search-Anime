import { AnimeModel } from './../../service/anime.module';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';
import { Subject, debounceTime, delay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private searchInput: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.searchInput.pipe(debounceTime(500)).subscribe(() => {
      this.search();
    });
  }

  animes: AnimeModel[] = []
  input: string = '';

  constructor(private service: AnimeService) {  }

  search(){
    const url = `https://api.jikan.moe/v4/anime?q=${this.input}`
        this.service.searchAnime(url).pipe(debounceTime(1000)).subscribe((response: any) => {
          this.animes = response.data 
    })
  }
  onSearchKeyUp() {
    this.searchInput.next(this.input);
  }
}