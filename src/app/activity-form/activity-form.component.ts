import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../common/activity.service';
import { FormBuilder } from '@angular/forms';

/**
 * Form component for edit or create new activities
 * @export ActivityFormComponent Form component
 * @class ActivityFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  // build form group
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
    // get observable
    this.service.getRandom()
      // listen to new values
      .subscribe(res => {
        // update form group values
        this.activityForm.patchValue(res);
      });
  }

  /**
   * Submit form
   */
  onSubmit() {
    console.log(this.activityForm.value);
  }

}
