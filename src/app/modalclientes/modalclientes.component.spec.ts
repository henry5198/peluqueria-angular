import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalclientesComponent } from './modalclientes.component';

describe('ModalclientesComponent', () => {
  let component: ModalclientesComponent;
  let fixture: ComponentFixture<ModalclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
