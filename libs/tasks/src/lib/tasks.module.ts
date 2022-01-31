import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TasksEffects } from './+state/tasks.effects';
import * as fromTasks from './+state/tasks.reducer';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTasks.TASKS_FEATURE_KEY, fromTasks.reducer),
    EffectsModule.forFeature([TasksEffects]),
  ],
  declarations: [TasksListComponent],
  exports: [TasksListComponent],
})
export class TasksModule {}
