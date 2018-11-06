import { Component, OnInit } from '@angular/core';
import { BoredService } from '../common/bored.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bored-random',
  templateUrl: './bored-random.component.html',
  styleUrls: ['./bored-random.component.css']
})
export class BoredRandomComponent implements OnInit {

  activityForm = this.fb.group({
    activity: [''],
    accessibility: [''],
    type: [''],
    participants: [''],
    price: [''],
    link: [''],
    key: ['']
  });

  constructor(private fb: FormBuilder, private service: BoredService) { }

  ngOnInit() {
    this.service.getRandom().subscribe(res => {
      this.activityForm.patchValue(res);
    });
  }

}
