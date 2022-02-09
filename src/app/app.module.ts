//LOCAL Componentsimport { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


//SHARED Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { LoginComponent } from './components/shared/login/login.component';


//LOCAL Components
import { NewsComponent } from './components/pages/news/news.component';

import { UsersComponent } from './components/pages/users/users.component';
import { AccountComponent } from './components/pages/users/account/account.component';
import { FollowComponent } from './components/pages/users/follow/follow.component';

import { OffersComponent } from './components/pages/offers/offers.component';
import { OfferDetailComponent } from './components/pages/offers/offer-detail/offer-detail.component';
import { OfferListComponent } from './components/pages/offers/offer-list/offer-list.component';

import { AsksComponent } from './components/pages/asks/asks.component';
import { AskDetailComponent } from './components/pages/asks/ask-detail/ask-detail.component';
import { AskListComponent } from './components/pages/asks/ask-list/ask-list.component';
import { OrdersComponent } from './components/pages/users/orders/orders.component';
import { CartComponent } from './components/pages/users/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const LOCAL_COMPONENT = [
  NewsComponent, AccountComponent, UsersComponent, OffersComponent, AsksComponent, AskDetailComponent, AskListComponent, OfferDetailComponent, 
  OfferListComponent, FollowComponent,
  
];

const SHARED_COMPONENT = [
  AppComponent, HeaderComponent, FooterComponent, NavComponent, RegisterComponent, LoginComponent, 

];

//const UX_MODULES = [];

@NgModule({
  declarations: [
    
    ...LOCAL_COMPONENT, 
    ...SHARED_COMPONENT, OrdersComponent, CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //...UX_MODULES,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
