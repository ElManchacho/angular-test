import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { FooterAppComponent } from './components/global-app/footer-app/footer-app.component';
import { HeaderAppComponent } from './components/global-app/header-app/header-app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FunctionnalityTwoComponent } from './components/functionnality-two/functionnality-two.component';
import { FunctionnalityOneComponent } from './components/functionnality-one/functionnality-one.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    FooterAppComponent,
    HeaderAppComponent,
    SignInComponent,
    LogInComponent,
    FunctionnalityTwoComponent,
    FunctionnalityOneComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
