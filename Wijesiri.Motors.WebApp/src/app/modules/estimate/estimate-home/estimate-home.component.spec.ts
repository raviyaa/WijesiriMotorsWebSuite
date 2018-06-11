import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateHomeComponent } from './estimate-home.component';

describe('EstimateHomeComponent', () => {
  let component: EstimateHomeComponent;
  let fixture: ComponentFixture<EstimateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
