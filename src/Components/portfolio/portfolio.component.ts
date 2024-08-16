import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {LazyLoadImageModule} from "ng-lazyload-image";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LazyLoadImageModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
img1:string='img/pngtree-a-laptop-laying-on-a-brown-desk-image_13038932.jpg';

  constructor() {
    this.ngAfterViewInit();
  }
  ngOnInit() {
  }

  workWithUs() {
    alert("Thank you for your interest! We'll get in touch soon.");
  }

  ngAfterViewInit(): void {
    this.workWithUs();

    // DOM manipulation should be done here
    const workSection = document.querySelector('.work-section');
    const workContent = document.querySelector('.work-content');

    if (workSection && workContent) {
      workSection.addEventListener('mouseenter', () => {
        workContent.classList.add('hovered');
      });

      workSection.addEventListener('mouseleave', () => {
        workContent.classList.remove('hovered');
      });
    }
  }

}
