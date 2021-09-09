import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCaketypeComponent } from './add-edit-caketype.component';

describe('AddEditCaketypeComponent', () => {
  let component: AddEditCaketypeComponent;
  let fixture: ComponentFixture<AddEditCaketypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCaketypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCaketypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
