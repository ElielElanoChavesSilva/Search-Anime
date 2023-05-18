import { AnimeModel } from './../../service/anime.module';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void { }

  animes: AnimeModel[] = []
  input: string = '';

  constructor(private service: AnimeService) {  }

  search(){
    const url = `https://api.jikan.moe/v4/anime?q=${this.input}`
        this.service.searchAnime(url).pipe(delay(1000)).subscribe((response: any) => {
          const data = response.data
          this.animes = response.data
          console.log(data);
    })
  }
}