import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../common/activity.service';
import { FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  activityForm = this.fb.group({
    activity: [''],
    accessibility: [''],
    type: [''],
    participants: [''],
    price: [''],
    link: [''],
    key: ['']
  });

  constructor(private fb: FormBuilder, private service: ActivityService) { }

  ngOnInit() {
    this.service.getRandom().subscribe(res => {
      this.activityForm.patchValue(res);
    });
  }

  minDateValidator(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      const date = new Date(value);

      if (minDate.getTime() < date.getTime()) {
        return null;
      } else {
        return { 'min': { value: control.value, expected: minDate } };

      }
    };
  }

}
