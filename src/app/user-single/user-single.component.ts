import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
    @Input() user!: User;
    @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(value: User) {
    this.delete.emit(value);
  }
}
