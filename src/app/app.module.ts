import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutComponent } from './Component/about/about.component';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
