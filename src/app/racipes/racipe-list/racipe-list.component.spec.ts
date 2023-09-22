import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacipeListComponent } from './racipe-list.component';

describe('RacipeListComponent', () => {
  let component: RacipeListComponent;
  let fixture: ComponentFixture<RacipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
