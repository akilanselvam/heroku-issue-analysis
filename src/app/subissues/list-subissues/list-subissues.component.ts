import { Component, OnInit } from '@angular/core';
import { SubissuesModel } from '../subissues-response';
import { SubissuesService } from '../subissues.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subissuess',
  templateUrl: './list-subissues.component.html',
  styleUrls: ['./list-subissues.component.css']
})
export class ListSubissuesComponent implements OnInit {
term;
  subissuess: Array<SubissuesModel>;
  constructor(private subissuesService: SubissuesService) { }

  ngOnInit() {
    this.subissuesService.getAllSubissuess().subscribe(data => {
      this.subissuess = data;
    }, error => {
      throwError(error);
    })
  }
}