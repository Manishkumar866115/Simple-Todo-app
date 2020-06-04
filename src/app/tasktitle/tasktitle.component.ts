import { Component, OnInit ,Input } from '@angular/core';
import { Todo } from 'src/Models/Todo';

@Component({
  selector: 'app-tasktitle',
  templateUrl: './tasktitle.component.html',
  styleUrls: ['./tasktitle.component.css']
})
export class TasktitleComponent implements OnInit {
  @Input() todo : Todo;
  constructor() { }

  ngOnInit(): void {
  }
}
