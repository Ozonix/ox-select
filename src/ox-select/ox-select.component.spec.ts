import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxSelectComponent } from './ox-select.component';

describe('OxSelectComponent', () => {
  let component: OxSelectComponent;
  let fixture: ComponentFixture<OxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
