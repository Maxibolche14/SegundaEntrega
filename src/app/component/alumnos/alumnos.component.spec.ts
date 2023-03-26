import { OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosComponent } from '/Angular/SegundaEntrega/src/app/component/alumnos/alumnos.component';


describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


