import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubissuesModel } from '../subissues-response';
import { Router } from '@angular/router';
import { SubissuesService } from '../subissues.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-subissues',
  templateUrl: './create-subissues.component.html',
  styleUrls: ['./create-subissues.component.css']
})
export class CreateSubissuesComponent implements OnInit {
  createSubissuesForm: FormGroup;
  subissuesModel: SubissuesModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subissuesService: SubissuesService) {
    this.createSubissuesForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subissuesModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubissues() {
    this.subissuesModel.name = this.createSubissuesForm.get('title')
    .value;
    this.subissuesModel.description = this.createSubissuesForm.get('description')
    .value;
    this.subissuesService.createSubissues(this.subissuesModel).subscribe(data => {
      this.router.navigateByUrl('/list-subissuess');
    }, error => {
      throwError(error);
    })
  }
}