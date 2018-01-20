import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemReactiveFbComponent } from './edit-item-reactive-fb.component';

describe('EditItemReactiveFbComponent', () => {
  let component: EditItemReactiveFbComponent;
  let fixture: ComponentFixture<EditItemReactiveFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemReactiveFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemReactiveFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
