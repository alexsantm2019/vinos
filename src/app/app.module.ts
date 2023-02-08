import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { vinoService } from './services/vino.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { AuthGuard } from './guards/auth.guard';
import { NuevoVinoDeactivateGuard } from './guards/crear-vino-deactivate.guard';
import { VinoAppInterceptor } from './services/vino-app.interceptor';

//Importo UserModule para poder reconocer topNavBar
import { UserModule } from './user/user.module';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      UserModule
    ],   
    providers: [
        UserService,
        UserStoreService,
        vinoService,
        AuthGuard,
        NuevoVinoDeactivateGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: VinoAppInterceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
