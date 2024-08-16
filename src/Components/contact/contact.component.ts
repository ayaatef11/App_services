import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
declare const validateForm:any;
@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  ngOnInit() {
this.valid();
  }
valid(){
validateForm();
}
  /*
    email:string='';
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('form');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const submitButton = document.querySelector('form button');

      form.addEventListener('submit', function(event) {
        event.preventDefault();

        // التحقق من صحة الإدخالات
        if (validateForm()) {
          alert('Form submitted successfully!');
          form.reset();
        }
      });

      function validateForm() {
        let isValid = true;

        // التحقق من صحة حقل الاسم
        if (nameInput.value.trim() === '') {
          showError(nameInput, 'Name is required');
          isValid = false;
        } else {
          clearError(nameInput);
        }

        // التحقق من صحة حقل البريد الإلكتروني
        if (emailInput.value.trim() === '') {
          showError(emailInput, 'Email is required');
          isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
          showError(emailInput, 'Invalid email format');
          isValid = false;
        } else {
          clearError(emailInput);
        }


        if (messageInput.value.trim() === '') {
          showError(messageInput, 'Message is required');
          isValid = false;
        } else {
          clearError(messageInput);
        }

        return isValid;
      }

      function showError(input:any, message:any) {
        const error = document.createElement('div');
        error.className = 'error';
        error.innerText = message;
        input.parentElement.appendChild(error);
        input.classList.add('input-error');
      }

      function clearError(input:any):void {
        const error = input.parentElement.querySelector('.error');
        if (error) {
          error.remove();
        }
        input.classList.remove('input-error');
      }

       function validateEmail(email:any):boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      }

    }*/

}
