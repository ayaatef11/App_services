import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   testimonials = [
    {
      text: "Working with the PETRONG team has been a huge success! They're good people who care deeply about our business!",
      author: "John Doe",
      position: "CEO",
      company: "Leonard Technologies",
      img: "img/testimonial.jpg"
    },
    {
      text: "The PETRONG team provided exceptional service and expertise. Highly recommended!",
      author: "Jane Smith",
      position: "COO",
      company: "Tech Solutions",
      img: "img/testimonial2.jpg"
    },
    //
  ];

  currentTestimonialIndex:number = 0;

    updateTestimonial() {
/*
        this.testimonials= this.testimonials[this.currentTestimonialIndex];
*/
    }

    nextTestimonial() {
        this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
        this.updateTestimonial();
    }

    prevTestimonial() {
        this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.updateTestimonial();
    }

   scrollToPreviousTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex === 0) ? this.testimonials.length - 1 : this.currentTestimonialIndex - 1;
    this.updateTestimonial();
  }

   scrollToNextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex === this.testimonials.length - 1) ? 0 :this. currentTestimonialIndex + 1;
    this.updateTestimonial();
  }

/*  document.addEventListener('DOMContentLoaded', updateTestimonial);*/

}
