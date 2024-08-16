import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements  OnInit{
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
