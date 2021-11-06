import { Component, Input, OnInit } from '@angular/core';
import { Obj } from '../models/obj';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
    @Input() obj!: Obj;
  constructor() { }

  ngOnInit(): void {
  }

}
