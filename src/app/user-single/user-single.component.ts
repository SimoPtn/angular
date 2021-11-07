import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Obj } from '../models/obj';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
    @Input() obj!: Obj;
    @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(value: Obj) {
    this.delete.emit(value);
}


}
