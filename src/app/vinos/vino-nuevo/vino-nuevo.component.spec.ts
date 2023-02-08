import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoNuevoComponent } from './vino-nuevo.component';

describe('VinoNuevoComponent', () => {
  let component: VinoNuevoComponent;
  let fixture: ComponentFixture<VinoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
