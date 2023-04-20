import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratComponent } from './registrat.component';

describe('RegistratComponent', () => {
  let component: RegistratComponent;
  let fixture: ComponentFixture<RegistratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
