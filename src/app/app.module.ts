import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component'; 
import { LitterService } from './services/LitterService/litter-service.service'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatService } from './services/CatService/cat-service.service';
import { ParentModule } from './parent/parent.module';
import { ErrorIntercept } from './services/ErrorIntercept';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [LitterService,CatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
