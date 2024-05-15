import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { TodoComponent  } from './todo/todo.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserComponent,
    UserSkillsComponent,
    TodoComponent,
    TasklistComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibf-b4-day32-lecture';
}
