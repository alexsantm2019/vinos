import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoItemComponent } from './vino-item.component';

describe('VinoItemComponent', () => {
  let component: VinoItemComponent;
  let fixture: ComponentFixture<VinoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
