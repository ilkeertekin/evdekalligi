import { Component, OnInit } from '@angular/core';

import {seasons} from '../puan-durumu/model/puanDurumuData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  seasons;
  playedMatches: boolean

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.playedMatches = (params.get('playedMatches') == "true");
    });
    this.seasons = seasons;
  }

}
