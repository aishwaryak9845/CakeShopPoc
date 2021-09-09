import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaketypeComponent } from './show-caketype.component';

describe('ShowCaketypeComponent', () => {
  let component: ShowCaketypeComponent;
  let fixture: ComponentFixture<ShowCaketypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCaketypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaketypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
