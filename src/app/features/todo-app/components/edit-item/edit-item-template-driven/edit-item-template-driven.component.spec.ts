import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemTemplateDrivenComponent } from './edit-item-template-driven.component';

describe('EditItemTemplateDrivenComponent', () => {
  let component: EditItemTemplateDrivenComponent;
  let fixture: ComponentFixture<EditItemTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
