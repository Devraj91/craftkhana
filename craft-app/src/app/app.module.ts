import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { MaterialModule, MdDialogModule } from '@angular/material';
import {HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutService } from "app/layout.service";
import { MenuService } from "app/menu.service";
import { JewelleryComponent } from './jewellery/jewellery.component';
import { HomeDecorComponent } from './home-decor/home-decor.component';
import { BagsComponent } from './bags/bags.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    JewelleryComponent,
    HomeDecorComponent,
    BagsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule, 
    MdDialogModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'utilities',
        component: DashboardComponent
      },
      {
        path: 'jewellery',
        component: JewelleryComponent
      },
      {
        path: 'decor',
        component: HomeDecorComponent
      },
      {
        path: 'bags',
        component: BagsComponent
      }
      
    ])
  ],
  providers: [MenuService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
