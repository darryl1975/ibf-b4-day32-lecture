import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  foodArray!: FormArray;

  // user!: User;
  user: User = new User('', '', '', []);
  food1!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.foodArray = this.formBuilder.array([]);

    this.userForm = this.formBuilder.group({
      lastname: this.formBuilder.control<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      firstname: this.formBuilder.control<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      email: this.formBuilder.control<string>('', [Validators.required, Validators.email]),
      foods: this.foodArray // this.formBuilder.array([])
    });
  }


  addNewFood() {
    // const foodItem = this.formBuilder.group({
    //   f1: this.formBuilder.control('')
    // });

    this.food1 = this.formBuilder.group({
      f1: this.formBuilder.control<string>('')
    });

    this.foodArray.push(this.food1);
  }

  deleteFood(itm: number) {
    if (this.foodArray.length !== 1) {
      this.foodArray.removeAt(itm);
    }
  }

  processUserForm() {
    const userInfo = this.userForm.value;
    console.log("User Form:" + this.userForm.controls['firstname'].value);
    console.log("User Form:" + this.userForm.controls['foods']);

    console.log("User Info Email:" + userInfo.email);


    console.log("User Info Food length:" + userInfo.foods.length);
    // for (let i = 0; i < userInfo.foods.length; i++) {
    //   console.log("User Info Food: {{i}}" + userInfo.foods[i].f1);
    // }

    for (var food of userInfo.foods) {
      console.log("User Info Food:" + food.f1);
    }
    // console.log("User Info Food:" + userInfo.foods[0].f1);
  }
}
