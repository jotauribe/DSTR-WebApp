import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarContainerComponent } from './components/sidebar-container/sidebar-container.component';
import { ToggleButtonComponent } from './components/sidebar-container/toggle-button/toggle-button.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SidebarDirective } from './directives/sidebar.directive';
import { ItineraryComponent } from "./components/itinerary/itinerary.component";
import { ClientElementComponent } from './components/itinerary/client-element/client-element.component';
import { ClientDetailComponent } from './components/itinerary/client-detail/client-detail.component';
import { ModalDirective } from './directives/modal.directive';
import { NewOrderFormComponent } from './components/new-order-form/new-order-form.component';
import { ClientListComponent } from './components/itinerary/client-list/client-list.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderElementComponent } from './components/orders/order-list/order-element/order-element.component';
import { OrderItemComponent } from './components/orders/order-list/order-element/order-item/order-item.component';

const appRoutes: Routes = [
  { path: "" , component: HomeComponent },
  { path: "orders" , component: OrdersComponent },
  { path: "itinerary" , component: ItineraryComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarContainerComponent,
    ToggleButtonComponent,
    VerticalMenuComponent,
    HomeComponent,
    OrdersComponent,
    ItineraryComponent,
    DropdownDirective,
    SidebarDirective,
    ClientElementComponent,
    ClientDetailComponent,
    ModalDirective,
    NewOrderFormComponent,
    ClientListComponent,
    OrderListComponent,
    OrderElementComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
