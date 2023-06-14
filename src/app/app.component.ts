import { Component } from '@angular/core'
import { MarvelApiService } from './marvel-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private marvelService: MarvelApiService) {}

  ngOnInit() {
    this.getCharacters()
    this.getCreators()
    this.getComics()
    this.getEvents()
    this.getSeries()
    this.getStories()
  }

  getCharacters() {
    this.marvelService.getCharacters().subscribe((response: any) => {
      console.log(response)
    })
  }
  getCreators() {
    this.marvelService.getCreators().subscribe((response: any) => {
      console.log(response)
    })
  }
  getComics() {
    this.marvelService.getComics().subscribe((response: any) => {
      console.log(response)
    })
  }
  getEvents() {
    this.marvelService.getEvents().subscribe((response: any) => {
      console.log(response)
    })
  }
  getSeries() {
    this.marvelService.getSeries().subscribe((response: any) => {
      console.log(response)
    })
  }
  getStories() {
    this.marvelService.getStories().subscribe((response: any) => {
      console.log(response)
    })
  }
}
