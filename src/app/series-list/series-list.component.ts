import { Component, OnInit } from '@angular/core';

import { MarvelApiService } from '../marvel-api.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss'],
})
export class SeriesListComponent implements OnInit {
  series: any[] = [];
  filteredSeries: any[] = [];
  searchTitle: string = '';

  constructor(private marvelService: MarvelApiService) {}

  ngOnInit() {
    this.fetchSeries();
  }

  fetchSeries() {
    this.marvelService.getSeries().subscribe((response: any) => {
      this.series = response.data.results;
      this.filteredSeries = this.series;
    });
  }

  searchSeries() {
    if (this.series) {
      this.filteredSeries = this.series.filter((serie) =>
        serie.title.toLowerCase().includes(this.searchTitle.toLowerCase()),
      );
    }
  }
}
