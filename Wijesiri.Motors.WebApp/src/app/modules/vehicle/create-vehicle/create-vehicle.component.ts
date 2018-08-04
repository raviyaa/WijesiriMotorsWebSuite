import { VehicleService } from './../vehicle.service';
import { IAppConfig } from './../../../app-config/app-config.interface';
import { Component, OnInit, ElementRef, ViewChildren, Inject } from '@angular/core';
import { FormControlName, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from '../../../shared/directives/validations/generic-validator';
import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs/Rx';
import { APP_CONFIG } from '../../../app-config/app-config.constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  pageTitle: String = 'Add New Vehicle';
  createVehicleForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  validationMessages: { [key: string]: { [key: string]: string } };
  genericValidator: GenericValidator;
  makers: any;
  types: any;
  formData: FormData = new FormData();
  get tags(): FormArray {
    return <FormArray>this.createVehicleForm.get('tags');
  }

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private location: Location,
    @Inject(APP_CONFIG) config: IAppConfig,
    private vehicleService: VehicleService
  ) {

    this.translateService.get('VEHICLE.ADD_NEW.VALIDATIONS').subscribe(
      data => {
        this.validationMessages = data;
        this.genericValidator = new GenericValidator(this.validationMessages);
      });
    this.makers = config.CAR_MAKERS;
    this.types = config.CAR_MAKERS;
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    Observable.merge(this.createVehicleForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.createVehicleForm);
    });
  }

  ngOnInit() {
    this.createVehicleForm = this.fb.group({
      regNo: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  saveVehicle() {
    console.log(this.createVehicleForm.value);
    if (this.createVehicleForm.dirty && this.createVehicleForm.valid) {

      this.vehicleService.addVehicle(this.createVehicleForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.cancelClick();
          },
          (error: any) => {
            console.log(error);
          }
        );

    }
  }
  cancelClick() {
    this.location.back();
  }
}
