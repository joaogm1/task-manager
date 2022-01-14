import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarTaskComponent } from './navbar-task.component'
import { BrowserModule } from '@angular/platform-browser'
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [NavbarTaskComponent],
  imports: [BrowserModule, NgbModule, RouterModule.forRoot([])],
  exports: [NavbarTaskComponent],
})
export class NavbarTaskModule {}
