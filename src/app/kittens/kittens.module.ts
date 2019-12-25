import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentKittensComponent } from './current-kittens/current-kittens.component';
import { ReadmoreKittensComponent } from './readmore-kittens/readmore-kittens.component';
import { FormerKittensComponent } from './former-kittens/former-kittens.component'; 
import { LitterService } from '../services/LitterService/litter-service.service';
import { NgxSlideshowAcracodeModule } from 'ngx-slideshow-acracode'; 
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CurrentKittensComponent, ReadmoreKittensComponent, FormerKittensComponent],
  imports: [
    CommonModule, 
    NgxSlideshowAcracodeModule,
    RouterModule
  ],
  providers: [LitterService,]
})
export class KittensModule { }
