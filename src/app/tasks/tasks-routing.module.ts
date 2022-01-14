import { Routes } from '@angular/router'
import { TaskListComponent } from './shared/components/task-list/task-list/task-list.component'

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/listar',
  },
  {
    path: 'tasks/list',
    component: TaskListComponent,
  },
]
