import { createAction, props } from '@ngrx/store';
import { Task } from './tasks.models';

export const init = createAction('[Tasks] Init');

export const loadTasksSuccess = createAction(
  '[Tasks/API] Load Tasks Success',
  props<{
    tasks: Task[];
  }>()
);

export const loadTasksFailure = createAction(
  '[Tasks/API] Load Tasks Failure',
  props<{
    error: any;
  }>()
);

export const addTask = createAction(
  '[Tasks] Add task',
  props<{
    task: Task;
  }>()
);
