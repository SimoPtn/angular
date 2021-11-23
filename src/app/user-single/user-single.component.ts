import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
    @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
