import { Component, OnInit  } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { TodoService } from "../../Services/todo.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  Todos : Todo[];
  constructor( private todoservice : TodoService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(Todos => this.Todos=Todos); 
  }
  toToggle(todo: Todo){
    todo.isCompleted= !todo.isCompleted;
  }
  deleteTodo(todo : Todo){
    this.todoservice.deleteTodo(todo).subscribe( todo => {
      var index=this.Todos.indexOf(todo);
      this.Todos.splice(index,1);
    })
  }
  addTodo(todo : Todo){
      this.todoservice.addTodo(todo).subscribe( todo => this.Todos.push(todo));  
  }
}
