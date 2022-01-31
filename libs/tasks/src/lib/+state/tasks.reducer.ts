import {
  createEntityAdapter,
  Dictionary,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as TasksActions from './tasks.actions';
import { Task } from './tasks.models';

export const TASKS_FEATURE_KEY = 'tasks';

export interface TasksState extends EntityState<Task> {
  ids: string[];
  entities: Dictionary<Task>;
}

export interface TasksPartialState {
  readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const tasksAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TasksState = tasksAdapter.getInitialState({
  // set initial required properties
  ids: ['1'],
  entities: {
    1: { id: '1', name: 'Task 1', color: 'teal' },
  },
});

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

const tasksReducer = createReducer(
  initialState,
  on(TasksActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(TasksActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TasksActions.addTask, (state, { task }) => {
    console.log(task);
    return adapter.addOne(task, state);
  })
);

export function reducer(state: TasksState | undefined, action: Action) {
  return tasksReducer(state, action);
}
