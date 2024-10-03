import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmEcoComponent } from './qcm-eco.component';

describe('QcmEcoComponent', () => {
  let component: QcmEcoComponent;
  let fixture: ComponentFixture<QcmEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmEcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcmEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
