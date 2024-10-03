import {Component, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder } from '@angular/forms';
import {MatTooltipModule } from '@angular/material/tooltip';
import {NgFor} from "@angular/common";
import { QcmService } from '../../../service/qcm.service';
import { NotationComponent } from "../../notation/notation.component";

@Component({
  selector: 'app-qcm-envi',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgFor, ReactiveFormsModule, MatTooltipModule, NotationComponent],
  templateUrl: './qcm-envi.component.html',
  styleUrl: './qcm-envi.component.css'
})
export class QcmEnviComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  formEnv: FormGroup;
  notes = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: null, label: 'NA' },
  ];

  constructor(private fb: FormBuilder, private qcmService: QcmService) {
    this.formEnv = this.fb.group({
      qcm1: [''],
      qcm2: [''],
      qcm3: [''],
      qcm4: [''],
      qcm5: ['']
    });
  }

  onNext() {
    const responses = [
      this.formEnv.value.qcm1,
      this.formEnv.value.qcm2,
      this.formEnv.value.qcm3,
      this.formEnv.value.qcm4,
      this.formEnv.value.qcm5
    ].map(value => value === '' ? null : value);

    this.qcmService.setResponses('env', responses);
    this.next.emit();
  }

  onPrevious() {
    this.previous.emit();
  }
}
