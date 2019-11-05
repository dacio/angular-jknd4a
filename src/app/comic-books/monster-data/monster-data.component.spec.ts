import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDataComponent } from './monster-data.component';

describe('MonsterDataComponent', () => {
  let component: MonsterDataComponent;
  let fixture: ComponentFixture<MonsterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
