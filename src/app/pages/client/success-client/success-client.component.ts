import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-client',
  templateUrl: './success-client.component.html',
  styleUrls: ['./success-client.component.scss'],
})
export class SuccessClientComponent  implements OnInit {
  private router = inject(Router)

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/client/dashboard'])
    }, 2500)
  }

}
