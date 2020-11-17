import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import {ContentListComponent} from './content-list/content-list.component';
import {ContentDetailComponent} from './content-detail/content-detail.component';
import {ExampleComponent} from './example/example.component';
import {MatFontComponent} from './example/mat-font/mat-font.component';
import {FlexNoScrollLayoutComponent} from './example/flex-no-scroll-layout/flex-no-scroll-layout.component';
import {FlexNavigationAreaComponent} from './example/flex-navigation-area/flex-navigation-area.component';
import {FlexBrowserBottomFooterComponent} from './example/flex-browser-bottom-footer/flex-browser-bottom-footer.component';
import {FlexDifferentAligntmentComponent} from './example/flex-different-aligntment/flex-different-aligntment.component';


const routes: Routes = [];

// @ts-ignore
@NgModule({
    imports: [RouterModule.forRoot([
        {path: '', component: ContentListComponent},
        {path: 'productList', component: ProductListComponent},
        {path: 'products/:productId', component: ProductDetailsComponent},
        {path: 'cart', component: CartComponent},
        {path: 'shipping', component: ShippingComponent},
        {path: 'content/:contentId', component: ContentDetailComponent},
        {
            path: 'example', component: ExampleComponent,
            children: [
                {
                    path: 'mat-font', // mat-font example child route path
                    component: MatFontComponent // child route component that the router renders
                },
                {
                    path: 'flex-no-scroll-layout',
                    component: FlexNoScrollLayoutComponent // another child route component that the router renders
                },
                {
                    path: 'flex-navigation-area',
                    component: FlexNavigationAreaComponent // another child route component that the router renders
                },
                {
                    path: 'flex-browser-bottom-footer',
                    component: FlexBrowserBottomFooterComponent // another child route component that the router renders
                },
                {
                    path: 'flex-different-alignment',
                    component: FlexDifferentAligntmentComponent // another child route component that the router renders
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
