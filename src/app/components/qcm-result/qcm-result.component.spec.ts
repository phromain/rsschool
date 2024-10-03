import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmResultComponent } from './qcm-result.component';

describe('QcmResultComponent', () => {
  let component: QcmResultComponent;
  let fixture: ComponentFixture<QcmResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcmResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
