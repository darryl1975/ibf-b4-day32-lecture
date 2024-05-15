import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({
    description: new FormControl<string>(''),
    due: new FormControl<any>(''),
    priority: new FormControl<string>('')
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

    let jsonObj = JSON.parse(JSON.stringify(this.todoForm.value)); 
    let todo: Todo = jsonObj as Todo;

    console.log("onsubmit:", todo);
  }
}
