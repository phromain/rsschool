import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmLocalComponent } from './qcm-local.component';

describe('QcmLocalComponent', () => {
  let component: QcmLocalComponent;
  let fixture: ComponentFixture<QcmLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcmLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
