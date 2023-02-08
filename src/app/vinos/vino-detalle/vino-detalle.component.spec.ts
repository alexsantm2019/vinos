import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoDetalleComponent } from './vino-detalle.component';

describe('VinoDetalleComponent', () => {
  let component: VinoDetalleComponent;
  let fixture: ComponentFixture<VinoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
