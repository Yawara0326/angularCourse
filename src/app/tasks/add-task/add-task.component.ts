import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{title: string, summary: string , date: string}>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelAddTask(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
