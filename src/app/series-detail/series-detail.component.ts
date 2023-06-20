import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from '../marvel-api.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss'],
})
export class SeriesDetailComponent implements OnInit {
  serie: any;

  constructor(private route: ActivatedRoute, private marvelService: MarvelApiService) {}

  ngOnInit(): void {
    const serieId = this.route.snapshot.paramMap.get('id');
    if (serieId) {
      this.fetchSerie(serieId);
    }
  }

  fetchSerie(id: string) {
    this.marvelService.getSerie(id).subscribe((response: any) => {
      this.serie = response.data.results[0];
    });
  }
}
