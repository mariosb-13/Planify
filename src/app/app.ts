import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Login } from './components/auth/login/login';
import { Signin } from './components/auth/signin/signin';
import { Profile } from './components/dashboard/profile/profile';
import { Stats } from './components/dashboard/stats/stats';
import { Taskform } from './components/task/taskform/taskform';
import { Tasklist } from './components/task/tasklist/tasklist';
import { Taskresume } from './components/task/taskresume/taskresume';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer,Home,Login,Signin,Profile,Stats,Taskform,Tasklist,Taskresume],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Planify');
}
