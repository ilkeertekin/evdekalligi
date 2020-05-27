import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {seasons} from '../puan-durumu/model/puanDurumuData';
import { PuanDurumuRes } from './model/puanDurumuRes';

@Component({
  selector: 'app-puan-durumu',
  templateUrl: './puan-durumu.component.html',
  styleUrls: ['./puan-durumu.component.css']
})
export class PuanDurumuComponent implements OnInit {
  seasons;
  
  constructor(private http: HttpClient) { };

  ngOnInit(): void {
    this.seasons = seasons; //this.getSeasonInfo;
  }

  getSeasonInfo() {
    return this.http.get('/assets/puanDurumu.json');
  }

}
