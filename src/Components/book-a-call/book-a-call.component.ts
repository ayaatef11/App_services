import {Component, OnInit} from '@angular/core';
/*import * as $ from 'jquery'*/
declare const showAlert:any;
@Component({
  selector: 'app-book-a-call',
  standalone: true,
  imports: [],
  templateUrl: './book-a-call.component.html',
  styleUrl: './book-a-call.component.css'
})
export class BookACallComponent implements OnInit{
    ngOnInit() {
        this.hello();
    }
hello(){
      showAlert();
}
    /*showAlert() {
    var name = $(document).getElementById("name").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var time = document.getElementById("time").value;
    var timezone = document.getElementById("timezone").value;
    var messageBox = document.getElementById("message-box");
    messageBox.innerHTML = `
        <img src="photo/petrong.png" >
        <h1><strong> 30 Minute Meeting </strong> </h1> 
        <h2><strong>Hello , </strong> ${name}</h2>
        <h3>Meeting Details</h3>
        <p><strong>Day :</strong> ${day}</p>
        <p><strong>Month :</strong> ${month}</p>
        <p><strong>Time :</strong> ${time}</p>
        <p><strong>Time Zone:</strong> ${timezone}</p>
    `;
    messageBox.style.display = "block";
  }*/
}
