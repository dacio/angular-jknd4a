import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSanityCheckComponent } from './ng-sanity-check.component';

describe('NgSanityCheckComponent', () => {
  let component: NgSanityCheckComponent;
  let fixture: ComponentFixture<NgSanityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSanityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSanityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
