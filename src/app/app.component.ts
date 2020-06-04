import { Component } from '@angular/core';
import { TodoService } from "../Services/todo.service";
import { Todo } from "../Models/Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String = 'Simple Todo App';
  constructor(public todoService : TodoService) { }
  
}
