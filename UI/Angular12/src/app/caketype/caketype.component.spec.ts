import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaketypeComponent } from './caketype.component';

describe('CaketypeComponent', () => {
  let component: CaketypeComponent;
  let fixture: ComponentFixture<CaketypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaketypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaketypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
