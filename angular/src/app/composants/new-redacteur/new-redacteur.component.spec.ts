import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRedacteurComponent } from './new-redacteur.component';

describe('NewRedacteurComponent', () => {
  let component: NewRedacteurComponent;
  let fixture: ComponentFixture<NewRedacteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRedacteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRedacteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
