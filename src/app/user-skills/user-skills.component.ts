import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-skills',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './user-skills.component.html',
  styleUrl: './user-skills.component.css'
})
export class UserSkillsComponent implements OnInit {

  skillForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      name: '',
      skills: this.formBuilder.array([])
    });
  }

  getSkills(): FormArray {

    return this.skillForm.get("skills") as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      Skills: '',
      Experience: ''
    })
  }

  addSkill() {
    this.getSkills().push(this.newSkill());

    // this.getSkills().push(
    //   this.formBuilder.group({
    //     Skills: '',
    //     Experience: ''
    //   })
    // )
  }

  onSubmit() {
    console.log(this.skillForm.value);
  }

}
