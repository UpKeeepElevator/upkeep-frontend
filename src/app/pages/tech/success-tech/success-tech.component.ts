import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-tech',
  templateUrl: './success-tech.component.html',
  styleUrls: ['./success-tech.component.scss'],
})
export class SuccessTechComponent implements OnInit {
  private router = inject(Router);

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/technician']);
    }, 2500);
  }
}
