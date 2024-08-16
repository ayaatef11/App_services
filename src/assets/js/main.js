let testimonials = [
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
  // أضف المزيد من الشهادات هنا
];

let currentTestimonialIndex = 0;

function updateTestimonial() {
  const testimonial = testimonials[currentTestimonialIndex];
  document.querySelector('.testimonial-card img').src = testimonial.img;
  document.querySelector('.testimonial-text').textContent = testimonial.text;
  document.querySelector('.testimonial-author span:nth-child(1)').textContent = testimonial.author;
  document.querySelector('.testimonial-author span:nth-child(2)').textContent = testimonial.position;
  document.querySelector('.testimonial-author span:nth-child(3)').textContent = testimonial.company;
}

function scrollToPreviousTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex === 0) ? testimonials.length - 1 : currentTestimonialIndex - 1;
  updateTestimonial();
}

function scrollToNextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex === testimonials.length - 1) ? 0 : currentTestimonialIndex + 1;
  updateTestimonial();
}

document.addEventListener('DOMContentLoaded', updateTestimonial);
