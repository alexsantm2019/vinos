import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoListaComponent } from './vino-lista.component';

describe('VinoListaComponent', () => {
  let component: VinoListaComponent;
  let fixture: ComponentFixture<VinoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
