import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubissuesComponent } from './list-subissues.component';

describe('ListSubissuesComponent', () => {
  let component: ListSubissuesComponent;
  let fixture: ComponentFixture<ListSubissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
