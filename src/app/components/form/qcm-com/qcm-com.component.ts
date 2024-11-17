import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgFor } from "@angular/common";
import { QcmService } from '../../../service/qcm.service';
import { NotationComponent } from "../../notation/notation.component";
import { AlertService } from '../../../service/alert.service';

@Component({
  selector: 'app-qcm-com',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgFor, ReactiveFormsModule, MatTooltipModule, NotationComponent],
  templateUrl: './qcm-com.component.html',
  styleUrl: './qcm-com.component.css'
})
export class QcmComComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  formCom: FormGroup;
  notes = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: null, label: 'NA' },
  ];

  constructor(private fb: FormBuilder, private qcmService: QcmService, private alertService: AlertService) {
    this.formCom = this.fb.group({
      qcm1: [''],
      qcm2: [''],
      qcm3: [''],
      qcm4: [''],
      qcm5: ['']
    });
  }

  validateForm(): boolean {
    const values = [
      this.formCom.value.qcm1,
      this.formCom.value.qcm2,
      this.formCom.value.qcm3,
      this.formCom.value.qcm4,
      this.formCom.value.qcm5
    ];
    return values.every(value => value !== '');
  }

  onNext() {
    if (this.validateForm()) {
      const responses = [
        this.formCom.value.qcm1,
        this.formCom.value.qcm2,
        this.formCom.value.qcm3,
        this.formCom.value.qcm4,
        this.formCom.value.qcm5
      ].map(value => value === '' ? null : value);

      this.qcmService.setResponses('com', responses);
      this.next.emit();
    } else {
      this.alertService.showAlert('Veuillez remplir toutes les questions avant de continuer.');
    }
  }

  onPrevious() {
    this.previous.emit();
  }
}