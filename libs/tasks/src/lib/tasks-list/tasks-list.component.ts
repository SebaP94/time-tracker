import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask } from '../+state/tasks.actions';
import { TasksState } from './../+state/tasks.reducer';
import { getAllTasks } from './../+state/tasks.selectors';

@Component({
  selector: 'time-tracker-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  constructor(private store: Store<TasksState>) {}
  $tasks = this.store.select(getAllTasks);
  ngOnInit() {
    console.log('init');
  }

  addTask() {
    this.store.dispatch(
      addTask({ task: { id: '2', name: 'Task 2', color: 'red' } })
    );
  }
}
