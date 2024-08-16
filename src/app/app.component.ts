import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "../Components/home/home.component";
import {AboutComponent} from "../Components/about/about.component";
import{BlogComponent} from "../Components/blog/blog.component";
import{BookACallComponent} from "../Components/book-a-call/book-a-call.component";
import{ContactComponent} from "../Components/contact/contact.component";
import{ExpertiseComponent} from "../Components/expertise/expertise.component";
import{PortfolioComponent} from "../Components/portfolio/portfolio.component";
import{ProductComponent} from "../Components/product/product.component";
import{HeaderComponent} from "../Components/header/header.component";
import{FooterComponent} from "../Components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,
    BlogComponent,AboutComponent
    ,BookACallComponent
    ,ContactComponent
    ,ExpertiseComponent
    ,PortfolioComponent,ProductComponent,
    HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iti-project';
}
