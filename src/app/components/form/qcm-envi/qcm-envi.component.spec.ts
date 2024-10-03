import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmEnviComponent } from './qcm-envi.component';

describe('QcmEnviComponent', () => {
  let component: QcmEnviComponent;
  let fixture: ComponentFixture<QcmEnviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmEnviComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcmEnviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
