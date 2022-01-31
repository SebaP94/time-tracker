import { createFeatureSelector, createSelector } from '@ngrx/store';
import { tasksAdapter, TasksState, TASKS_FEATURE_KEY } from './tasks.reducer';

// Lookup the 'Tasks' feature state managed by NgRx
export const getTasksState =
  createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

const { selectAll, selectEntities } = tasksAdapter.getSelectors();

export const getAllTasks = createSelector(getTasksState, (state: TasksState) =>
  selectAll(state)
);

export const getTasksEntities = createSelector(
  getTasksState,
  (state: TasksState) => selectEntities(state)
);
