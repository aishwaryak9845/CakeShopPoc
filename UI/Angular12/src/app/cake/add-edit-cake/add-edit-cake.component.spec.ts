import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCakeComponent } from './add-edit-cake.component';

describe('AddEditCakeComponent', () => {
  let component: AddEditCakeComponent;
  let fixture: ComponentFixture<AddEditCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
