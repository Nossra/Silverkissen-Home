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
  public imagesUrl = [
    new NgxSlideshowAcracodeModel('https://bmj2k.files.wordpress.com/2011/04/heroes.jpg', 'Button 1'),
    new NgxSlideshowAcracodeModel('https://www.cars.co.za/carimages_gen/Audi-TT/Audi-TT-coupe-1.8TFSI_AudiTT3c6l.jpg', 'Button 2', 'rotate(90deg)'),
    new NgxSlideshowAcracodeModel('http://comicsalliance.com/files/2011/04/strips02.jpg', 'Button 3', 'rotate(180deg)')
]; 
  
  constructor(
    private litterService: LitterService,
    private router:Router
  ) { }

  ngOnInit() {
    this.litterService.getActiveLitters().subscribe(x => {
      this.litters = x;  
      console.log(x);
      for (let litter of this.litters) { 
        this.arrays.push(this.getLitterImages(litter));
      }
    })
  }

  noteLimiter(notes: string) {
    let limit:number = 140;
    if (notes.length > limit) {
      return notes.substring(0,limit) + "...";
    } 
    return notes
  }
 
  getLitterImages(litter:Litter) : Array<NgxSlideshowAcracodeModel> { 
    let array: NgxSlideshowAcracodeModel[] = new Array<NgxSlideshowAcracodeModel>();
    for (let image of litter.images) { 
      array.push(new NgxSlideshowAcracodeModel(image.value));
    }  
    return array;
  }


}
