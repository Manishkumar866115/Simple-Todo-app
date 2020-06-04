import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktitleComponent } from './tasktitle.component';

describe('TasktitleComponent', () => {
  let component: TasktitleComponent;
  let fixture: ComponentFixture<TasktitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasktitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
