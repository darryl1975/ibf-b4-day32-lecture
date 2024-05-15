import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
export class UserSkillsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title: String = "default value";

  skillForm!: FormGroup;

  // 1st lifecycle method
  constructor(private formBuilder: FormBuilder) {

    console.log('user-skills contructor triggered');
  }
  ngOnDestroy(): void {
    console.log('user-skills ngOnDestroy:');
  }
  ngAfterViewChecked(): void {
    console.log('user-skills ngAfterViewChecked:');
  }
  ngAfterViewInit(): void {
    console.log('user-skills ngAfterViewInit:');
  }
  ngAfterContentChecked(): void {
    console.log('user-skills ngAfterContentChecked:');
  }
  ngAfterContentInit(): void {
    console.log('user-skills ngAfterContentInit:');
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('Changes detected:' + changes);
    // if (changes['title'].currentValue !== changes['title'].previousValue) {

    //   console.log('Current: Previous -->' + changes['title'].currentValue + '<==>' + changes['title'].previousValue)
    // }
  }

  ngOnInit(): void {
    console.log('user-skills ngOnInit triggered');
    this.skillForm = this.formBuilder.group({
      name: '',
      skills: this.formBuilder.array([])
    });
  }

  ngDoCheck(): void {
    console.log('user-skills DoCheck triggered');
  }

  changeEvent(event: Event) {
    this.title = (event.target as HTMLInputElement).value;

    console.log('changeEvent: ' + (event.target as HTMLInputElement).value);
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
