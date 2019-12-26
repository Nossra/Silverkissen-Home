import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Litter } from '../../entities/litter';  
import { LitterService } from '../../services/LitterService/litter-service.service';
import { IImage } from 'ng-simple-slideshow';
import { NgxSlideshowAcracodeModel } from 'ngx-slideshow-acracode';

@Component({
  selector: 'app-current-kittens',
  templateUrl: './current-kittens.component.html',
  styleUrls: ['./current-kittens.component.css']
})
export class CurrentKittensComponent implements OnInit {

  public litters: Litter[] = new Array<Litter>();  
  public arrays: Array<Array<NgxSlideshowAcracodeModel>> = new Array<Array<NgxSlideshowAcracodeModel>>();
  public loading : boolean = true;
  
  constructor(
    private litterService: LitterService,
    private router:Router
  ) { }

  ngOnInit() {
    this.litterService.getActiveLitters().subscribe(x => {
      this.litters = x;  
      this.loading = false;
    })
  }

  noteLimiter(notes: string) {
    let limit:number = 140;
    if (notes.length > limit) {
      return notes.substring(0,limit) + "...";
    } 
    return notes
  }
 
  // getLitterImages(litter:Litter) : Array<NgxSlideshowAcracodeModel> { 
  //   let array: NgxSlideshowAcracodeModel[] = new Array<NgxSlideshowAcracodeModel>();
  //   for (let image of litter.images) { 
  //     array.push(new NgxSlideshowAcracodeModel(image.value));
  //   }  
  //   return array;
  // }


}
