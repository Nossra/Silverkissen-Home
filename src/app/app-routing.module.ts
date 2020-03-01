import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { CurrentKittensComponent } from './kittens/current-kittens/current-kittens.component';
import { ReadmoreKittensComponent } from './kittens/readmore-kittens/readmore-kittens.component';
import { FormerKittensComponent } from './kittens/former-kittens/former-kittens.component';
import { CurrentParentsComponent } from './parent/current-parents/current-parents.component';
import { ReadmoreParentsComponent } from './parent/readmore-parents/readmore-parents.component';


const routes: Routes = [
  {path:"", component:HomeComponent}, 
  {path:"foraldrar", component:CurrentParentsComponent}, 
  {path:"foraldrar/:id", component:ReadmoreParentsComponent}, 
  {path:"kattungar", component:CurrentKittensComponent}, 
  {path:"kull/:id", component:ReadmoreKittensComponent}, 
  {path:"tidigare", component:FormerKittensComponent}, 
  { path: '**', redirectTo: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
