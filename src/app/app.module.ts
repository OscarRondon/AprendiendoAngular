//Agular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Main App
import { customRoutes } from './Classes/CustomRoutes';
import { AppComponent } from './app.component';
import { AngularMainComponent } from './Components/angular-main/angular-main.component';

//eCommerceApp
import { ECommerceMainComponent } from './Components/eCommerce/e-commerce-main/e-commerce-main.component';
import { TopBarComponent } from './Components/eCommerce/Components/top-bar/top-bar.component';
import { ProductListComponent } from './Components/eCommerce/Components/product-list/product-list.component';
import { ProductAlertsComponent } from './Components/eCommerce/Components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './Components/eCommerce/Components/product-details/product-details.component';
import { ProducCartComponent } from './Components/eCommerce/Components/produc-cart/produc-cart.component';
import { ShippingComponent } from './Components/eCommerce/Components/shipping/shipping.component';

//Course html5
import { CourseHTML5MainComponent } from "./Components/CourseHTML5/course-html5-main/course-html5-main.component";
import { Coursehtml5MainmenuComponent } from './Components/CourseHTML5/Components/coursehtml5-mainmenu/coursehtml5-mainmenu.component';
import { Coursehtml5WelcomeComponent } from './Components/CourseHTML5/Components/coursehtml5-welcome/coursehtml5-welcome.component';
import { Coursehtml5Component } from "./Components/CourseHTML5/Components/coursehtml5/coursehtml5.component";
import { Coursehtml5FormsComponent } from "./Components/CourseHTML5/Components/coursehtml5-forms/coursehtml5-forms.component";
import { Coursehtlm5CanvasComponent } from './Components/CourseHTML5/Components/coursehtlm5-canvas/coursehtlm5-canvas.component';
import { Coursehtml5DraganddropComponent } from './Components/CourseHTML5/Components/coursehtml5-draganddrop/coursehtml5-draganddrop.component';
import { Coursehtml5GeolocationComponent } from './Components/CourseHTML5/Components/coursehtml5-geolocation/coursehtml5-geolocation.component';
import { Coursehtml5WebstorageComponent } from './Components/CourseHTML5/Components/coursehtml5-webstorage/coursehtml5-webstorage.component';
import { Coursehtml5IndexeddbComponent } from './Components/CourseHTML5/Components/coursehtml5-indexeddb/coursehtml5-indexeddb.component';
import { Coursehtml5FilesComponent } from './Components/CourseHTML5/Components/coursehtml5-files/coursehtml5-files.component';

const routes: Routes = customRoutes;

@NgModule({
  declarations: [
    AppComponent,
    AngularMainComponent,
    //eCommerceApp
    ECommerceMainComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProducCartComponent,
    ShippingComponent,
    //Course html5
    CourseHTML5MainComponent,
    Coursehtml5MainmenuComponent,
    Coursehtml5WelcomeComponent,
    Coursehtml5Component,
    Coursehtml5FormsComponent,
    Coursehtlm5CanvasComponent,
    Coursehtml5DraganddropComponent,
    Coursehtml5GeolocationComponent,
    Coursehtml5WebstorageComponent,
    Coursehtml5IndexeddbComponent,
    Coursehtml5FilesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
