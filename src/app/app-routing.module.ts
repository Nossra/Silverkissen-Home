import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentsComponent } from './parents/parents.component';
import { CurrentKittensComponent } from './kittens/current-kittens/current-kittens.component';
import { ReadmoreKittensComponent } from './kittens/readmore-kittens/readmore-kittens.component';
import { FormerKittensComponent } from './kittens/former-kittens/former-kittens.component';


const routes: Routes = [
  {path:"", component:HomeComponent}, 
  {path:"foraldrar", component:ParentsComponent}, 
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
