import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ToastController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from "../pages/splash/splash";
import { AuthPage } from "../pages/auth/auth";
import { CollaborateurPage } from "../pages/collaborateur/collaborateur";
import { TraiteurPage } from "../pages/traiteur/traiteur";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    AuthPage,
    CollaborateurPage,
    TraiteurPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    AuthPage,
    CollaborateurPage,
    TraiteurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
