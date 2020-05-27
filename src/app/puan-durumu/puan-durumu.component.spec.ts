import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuanDurumuComponent } from './puan-durumu.component';

describe('PuanDurumuComponent', () => {
  let component: PuanDurumuComponent;
  let fixture: ComponentFixture<PuanDurumuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuanDurumuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuanDurumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
