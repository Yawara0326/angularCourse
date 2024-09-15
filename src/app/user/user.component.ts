import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { OutletContext } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user!: User;
  @Output() select = new EventEmitter<string>();
  @Input() selected!: boolean;

  get imagePath(){
    return 'assets/users/'+ this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
