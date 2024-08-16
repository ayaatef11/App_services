import { RouterModule,Routes } from '@angular/router';
import {HomeComponent} from "../Components/home/home.component";
import {AboutComponent} from "../Components/about/about.component";
import {BlogComponent} from "../Components/blog/blog.component";
import {BookACallComponent} from "../Components/book-a-call/book-a-call.component";
import {ContactComponent} from "../Components/contact/contact.component";
import {ExpertiseComponent} from "../Components/expertise/expertise.component";
import {PortfolioComponent} from "../Components/portfolio/portfolio.component";
import {ProductComponent} from "../Components/product/product.component";
import { NgModule } from '@angular/core';
import {LazyLoadImageModule}from "ng-lazyload-image";
export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'blog',component:BlogComponent,title:'Blog'},
    {path:'book-a-call',component:BookACallComponent,title:'Book-A-call'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'expertise',component:ExpertiseComponent,title:'Expertise'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
    {path:'product',component:ProductComponent,title:'product'},
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes),
    LazyLoadImageModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }