import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskresume } from './taskresume';

describe('Taskresume', () => {
  let component: Taskresume;
  let fixture: ComponentFixture<Taskresume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskresume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskresume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
