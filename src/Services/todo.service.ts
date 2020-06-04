import { Injectable } from '@angular/core';
import { Todo } from "../Models/Todo" ;
import  { Observable , of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Todos : Todo []=[{ id: 1, Title:"Bathing" , isCompleted:false}];

  constructor() { }

  getTodos() : Observable<Todo[]>{
    return of(this.Todos);
  }
  addTodo(todo:Todo) : Observable<Todo>{
    return of(todo);
  }
  deleteTodo( todo: Todo): Observable<Todo>{
    return of(todo);
  }
}
