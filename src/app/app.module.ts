import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HttpModule } from '@angular/http';

 //pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from "../pages/splash/splash";
import { AuthPage } from "../pages/auth/auth";
import { CollaborateurPage } from "../pages/collaborateur/collaborateur";
import { TraiteurPage } from "../pages/traiteur/traiteur";
import { MenuPage } from '../pages/menu/menu';
import { AssisPage } from '../pages/assis/assis';


// import { ModalCollaMenuPage } from "../templates/modalCollaMenu/modalCollaMenu";
// import { ModalCollaRecapPage } from "../templates/modalCollaRecap/modalCollaRecap";

import { modalTraitMenuPage } from "../templates/modalTraitMenu/modalTraitMenu";
import { modalCreatePlatePage } from "../templates/modalCreatePlate/modalCreatePlate";

// Native Components

import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';


//provider
import { AuthService } from '../providers/auth-service/auth-service';
import { groupeUnApiService } from '../services/groupeUnApi.service'




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    AuthPage,
    CollaborateurPage,
    TraiteurPage,
    AssisPage,
    MenuPage,
    modalTraitMenuPage,
    modalCreatePlatePage,
    // ModalCollaMenuPage,
    // ModalCollaRecapPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    AuthPage,
    CollaborateurPage,
    TraiteurPage,
    modalTraitMenuPage,

    // ModalCollaMenuPage,
    // ModalCollaRecapPage
    // modalCreatePlatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastController,
    AuthService,
    NativeStorage,
    ModalController,
    groupeUnApiService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
