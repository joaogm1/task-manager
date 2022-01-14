import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskListComponent } from './shared/components/task-list/task-list/task-list.component'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  exports: [TaskListComponent],
})
export class TasksModule {}
