import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormArray } from '@angular/forms';
import { GenericValidator } from '../../../shared/directives/validations/generic-validator';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  pageTitle: String = 'Create New Customer';
  createCustomerForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  validationMessages: { [key: string]: { [key: string]: string } };
  genericValidator: GenericValidator;

  formData: FormData = new FormData();

  get tags(): FormArray {
    return <FormArray>this.createCustomerForm.get('tags');
  }

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService
  ) {

    this.translateService.get('CUSTOMER.ADD_NEW.VALIDATIONS').subscribe(
      data => {
        this.validationMessages = data;
        this.genericValidator = new GenericValidator(this.validationMessages);
      });
  }

  ngOnInit() {
    this.createCustomerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }
  saveCustomer() {

  }
}
