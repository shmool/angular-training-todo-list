import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemReactiveComponent } from './edit-item-reactive.component';

describe('EditItemReactiveComponent', () => {
  let component: EditItemReactiveComponent;
  let fixture: ComponentFixture<EditItemReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
