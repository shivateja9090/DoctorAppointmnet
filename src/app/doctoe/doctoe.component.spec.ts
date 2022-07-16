import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoeComponent } from './doctoe.component';

describe('DoctoeComponent', () => {
  let component: DoctoeComponent;
  let fixture: ComponentFixture<DoctoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
