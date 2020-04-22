import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiValuesComponent } from './api-values.component';

describe('ApiValuesComponent', () => {
  let component: ApiValuesComponent;
  let fixture: ComponentFixture<ApiValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
