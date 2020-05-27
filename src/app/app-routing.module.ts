import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuanDurumuComponent } from './puan-durumu/puan-durumu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FixtureComponent } from './fixture/fixture.component';


const routes: Routes = [];

@NgModule({
  imports: [HttpClientModule,
    RouterModule.forRoot([
    { path: '', component: MainPageComponent },
    { path: 'puanDurumu', component: PuanDurumuComponent },
    { path: 'fixture/:playedMatches', component: FixtureComponent },])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
