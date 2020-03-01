import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentParentsComponent } from './current-parents/current-parents.component';
import { ReadmoreParentsComponent } from './readmore-parents/readmore-parents.component';
import { CatService } from '../services/CatService/cat-service.service'; 
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CurrentParentsComponent, ReadmoreParentsComponent],
  imports: [
    CommonModule, 
    RouterModule
  ],
  providers: [CatService]
})
export class ParentModule { }
