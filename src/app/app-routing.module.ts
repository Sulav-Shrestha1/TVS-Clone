import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TVSComponent } from './MyComponents/tvs/tvs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { WarrantyComponent } from './customers/warranty/warranty.component';
import { UsermanualComponent } from './customers/usermanual/usermanual.component';
import { CareerListComponent } from './career/career-list/career-list.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { OverviewBlogComponent } from './MyComponents/tvs/overview-blog/overview-blog.component';
import { MycareerComponent } from './career/mycareer/mycareer.component';
import { ErrorComponent } from './error/error.component';
import { BikeListComponent } from './shop/bike-list/bike-list.component';
import { ScooterListComponent } from './shop/scooter-list/scooter-list.component';
import { ThreeWheelerListComponent } from './shop/three-wheeler-list/three-wheeler-list.component';
import { AccessoriesComponent } from './MyComponents/tvs/accessories/accessories.component';
import { AccessoriesListComponent } from './MyComponents/tvs/accessories/accessories-list/accessories-list.component';
import { PageInformationComponent } from './MyComponents/tvs/page-information/page-information.component';
import { AccessoriesDetailsComponent } from './MyComponents/tvs/accessories/accessories-details/accessories-details.component';
import { ProductComponent } from './MyComponents/tvs/product/product.component';
import { OverviewComponent } from './MyComponents/tvs/overview/overview.component';
import { OfferproductComponent } from './MyComponents/tvs/offerproduct/offerproduct.component';
import { NewsletterComponent } from './MyComponents/tvs/newsletter/newsletter.component';
import { SliderComponent } from './MyComponents/tvs/slider/slider.component';
import { BlogareaComponent } from './MyComponents/tvs/blogarea/blogarea.component';
import { MainblogComponent } from './MyComponents/tvs/mainblog/mainblog.component';

const routes: Routes = [
  { path: '', component: TVSComponent},
  { path: 'App', component: AppComponent},
  { path: 'AboutUs', component: AboutUsComponent},
  { path: 'Blog', component: BlogComponent},
  { path: 'BlogList/:id', component: BlogListComponent},
  { path: 'Career', component: CareerComponent},
  { path: 'CarrerList', component: CareerListComponent},
  { path: 'CareerMyCareer', component: MycareerComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'UserManual', component: UsermanualComponent},
  { path: 'Warranty', component: WarrantyComponent},
  { path: 'Error', component: ErrorComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Shop', component: ShopComponent},
  { path: 'BikeList/:id', component: BikeListComponent},
  { path: 'ScooterList/:id', component: ScooterListComponent},
  { path: 'ThreeWheelerList/:id', component: ThreeWheelerListComponent},
  { path: 'Accessories', component: AccessoriesComponent},
  { path: 'AccessoriesList/:id', component: AccessoriesListComponent},
  { path: 'OverviewBlog', component: OverviewBlogComponent},
  { path: 'PageInformation/:id', component: PageInformationComponent},
  { path: 'Product', component: ProductComponent},
  { path: 'Overview', component: OverviewComponent},
  { path: 'OfferProduct', component: OfferproductComponent},
  { path: 'NewsLetter', component: NewsletterComponent},
  { path: 'BlogArea', component: BlogareaComponent},
  { path: 'Slider', component: SliderComponent},
  { path: 'MainBlog', component: MainblogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TVSComponent, AppComponent, AboutUsComponent, BlogComponent, CareerComponent, ContactComponent, LoginComponent, ShopComponent, WarrantyComponent, UsermanualComponent, CareerListComponent, BlogListComponent, OverviewBlogComponent, MycareerComponent, AccessoriesComponent, AccessoriesListComponent, ErrorComponent, BikeListComponent, ScooterListComponent, ThreeWheelerListComponent, PageInformationComponent, AccessoriesDetailsComponent, ProductComponent, OverviewComponent, OfferproductComponent, NewsletterComponent, BlogareaComponent, SliderComponent, MainblogComponent ]