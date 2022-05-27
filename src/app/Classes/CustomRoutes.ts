import { Routes } from "@angular/router";
//Main App
import { AngularMainComponent } from '../Components/angular-main/angular-main.component';

//eCommerceApp
import { ECommerceMainComponent } from '../Components/eCommerce/e-commerce-main/e-commerce-main.component';
import { ProductListComponent } from '../Components/eCommerce/Components/product-list/product-list.component';
import { ProductDetailsComponent } from '../Components/eCommerce/Components/product-details/product-details.component';
import { ProducCartComponent } from '../Components/eCommerce/Components/produc-cart/produc-cart.component';
import { ShippingComponent } from '../Components/eCommerce/Components/shipping/shipping.component';

//Course html5
import { CourseHTML5MainComponent } from "../Components/CourseHTML5/course-html5-main/course-html5-main.component";
import { Coursehtml5WelcomeComponent } from "../Components/CourseHTML5/Components/coursehtml5-welcome/coursehtml5-welcome.component";
import { Coursehtml5Component } from "../Components/CourseHTML5/Components/coursehtml5/coursehtml5.component";
import { Coursehtml5FormsComponent } from "../Components/CourseHTML5/Components/coursehtml5-forms/coursehtml5-forms.component";
import { Coursehtlm5CanvasComponent } from "../Components/CourseHTML5/Components/coursehtlm5-canvas/coursehtlm5-canvas.component";
import { Coursehtml5DraganddropComponent } from "../Components/CourseHTML5/Components/coursehtml5-draganddrop/coursehtml5-draganddrop.component";
import { Coursehtml5GeolocationComponent } from "../Components/CourseHTML5/Components/coursehtml5-geolocation/coursehtml5-geolocation.component";
import { Coursehtml5WebstorageComponent } from "../Components/CourseHTML5/Components/coursehtml5-webstorage/coursehtml5-webstorage.component";
import { Coursehtml5IndexeddbComponent } from "../Components/CourseHTML5/Components/coursehtml5-indexeddb/coursehtml5-indexeddb.component";
import { Coursehtml5FilesComponent } from "../Components/CourseHTML5/Components/coursehtml5-files/coursehtml5-files.component";

export const customRoutes: Routes = [
    { path: '', component: AngularMainComponent },
    { 
      path: 'eCommerce', 
      component: ECommerceMainComponent,
      children: [
        {path: '', component: ProductListComponent},
        {path: 'ProductDetail/:productId', component: ProductDetailsComponent},
        {path: 'Cart', component: ProducCartComponent},
        {path: 'Shipping', component: ShippingComponent},
      ]  
    },
    { 
      path: 'CourseHTML5', 
      component: CourseHTML5MainComponent,
      children: [
        {path: '', component: Coursehtml5WelcomeComponent},
        {path: 'Overview', component: Coursehtml5Component},
        {path: 'Forms', component: Coursehtml5FormsComponent},
        {path: 'Canvas', component: Coursehtlm5CanvasComponent},
        {path: 'DragAndDrop', component: Coursehtml5DraganddropComponent},
        {path: 'GeoLocation', component: Coursehtml5GeolocationComponent},
        {path: 'WebStorage', component: Coursehtml5WebstorageComponent},
        {path: 'IndexedDB', component: Coursehtml5IndexeddbComponent},
        {path: 'Files', component: Coursehtml5FilesComponent}
      ]
    },
  ];