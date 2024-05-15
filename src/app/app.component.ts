import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserComponent,
    UserSkillsComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibf-b4-day32-lecture';
}
