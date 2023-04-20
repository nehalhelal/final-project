import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemealComponent } from './singlemeal.component';

describe('SinglemealComponent', () => {
  let component: SinglemealComponent;
  let fixture: ComponentFixture<SinglemealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglemealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglemealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
