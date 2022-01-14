import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navbar-task',
  templateUrl: './navbar-task.component.html',
  styleUrls: ['./navbar-task.component.scss'],
})
export class NavbarTaskComponent implements OnInit {
  public isMenuCollapsed = true

  constructor() {}

  ngOnInit(): void {}
}
