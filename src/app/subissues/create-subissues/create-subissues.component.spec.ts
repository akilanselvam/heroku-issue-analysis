import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubissuesComponent } from './create-subissues.component';

describe('CreateSubissuesComponent', () => {
  let component: CreateSubissuesComponent;
  let fixture: ComponentFixture<CreateSubissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
