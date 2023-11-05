import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [ ],
})
export class SideMenuComponent {

  constructor(private router:Router)
  {
  }
  public navigateTo(path:string)
  {
    this.router.navigate([path])
  }
  }