import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

interface User{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-class';
  users = DUMMY_USERS;
  userId?: string;


  onSelectUser(id: string){
    this.userId = id;
  }

  get selectedUserID() {
    return this.users.find((user) => user.id === this.userId);
  }

  trackByUserId(index: number, user: User): string {
    return user.id;
  }

}
