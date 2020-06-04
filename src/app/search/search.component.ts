import { Component, OnInit ,Output , EventEmitter} from '@angular/core';
import { TodoService } from "../../Services/todo.service";
import { Todo } from "../../Models/Todo";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() addTodo : EventEmitter<any> = new EventEmitter();
  title: String;
  maxi: number ;
  x : number ;

  constructor(public todoService : TodoService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.maxi=0;
    let todos : Todo[]= this.todoService.Todos;
    for( let i in todos){
      if( this.maxi < todos[i].id){
        this.maxi = todos[i].id.valueOf();
      }
    }
    let todo : Todo = {
        id : this.maxi + 1 ,
        Title: this.title,
        isCompleted: false
    };
    this.addTodo.emit(todo);
  }
}
