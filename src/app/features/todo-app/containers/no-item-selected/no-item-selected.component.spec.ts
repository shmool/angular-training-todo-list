import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemSelectedComponent } from './no-item-selected.component';

describe('NoItemSelectedComponent', () => {
  let component: NoItemSelectedComponent;
  let fixture: ComponentFixture<NoItemSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoItemSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoItemSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
