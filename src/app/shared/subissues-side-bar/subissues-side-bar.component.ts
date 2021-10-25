import { Component, OnInit } from '@angular/core';
import { SubissuesService } from 'src/app/subissues/subissues.service';
import { SubissuesModel } from 'src/app/subissues/subissues-response';

@Component({
  selector: 'app-subissues-side-bar',
  templateUrl: './subissues-side-bar.component.html',
  styleUrls: ['./subissues-side-bar.component.css']
})
export class SubissuesSideBarComponent implements OnInit {
  subissuess: Array<SubissuesModel> = [];
  displayViewAll: boolean;

  sidenavWidth = 4;
  ngStyle: string;
  
  constructor(private subissuesService: SubissuesService) {
    this.subissuesService.getAllSubissuess().subscribe(data => {
      if (data.length > 3) {
        this.subissuess = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subissuess = data;
      }
    });
  }

  ngOnInit(): void { }
  
  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

}
