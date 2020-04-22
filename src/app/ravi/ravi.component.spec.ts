import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaviComponent } from './ravi.component';

describe('RaviComponent', () => {
  let component: RaviComponent;
  let fixture: ComponentFixture<RaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
