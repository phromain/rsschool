import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  scrollTo(fragment: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(fragment);
      }, 100); 
    });
  }

}
