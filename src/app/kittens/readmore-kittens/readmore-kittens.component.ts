import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LitterService } from '../../services/LitterService/litter-service.service';
import { Litter } from '../../entities/litter';

@Component({
  selector: 'app-readmore-kittens',
  templateUrl: './readmore-kittens.component.html',
  styleUrls: ['./readmore-kittens.component.css']
})
export class ReadmoreKittensComponent implements OnInit {

  public litterID: number;
  public litter: Litter = new Litter();
  public loading : boolean = true;

  constructor(
    public activatedRouter:ActivatedRoute,
    public litterService:LitterService) {

     }
    
  ngOnInit() {
    this.activatedRouter.params.subscribe(x => {
      this.litterID = x["id"];
    });
    this.litterService.getLitterById(this.litterID).subscribe(x => { 
      this.litter = x;
      this.loading = false;
    })
  }

  getAmountOfKidsString(kids:number) : string { 
    switch (kids) {
      case 0: return "Kullen har tyvärr inga ungar";
      case 1: return "Kullen innehåller en unge";
      case 2: return "Kullen innehåller två ungar";
      case 3: return "Kullen innehåller tre ungar";
      case 4: return "Kullen innehåller fyra ungar";
      case 5: return "Kullen innehåller fem ungar";
      case 6: return "Kullen innehåller sex ungar";
      case 7: return "Kullen innehåller sju ungar";
      default: return "Kullen innehåller över sju ungar";
    }
  }

}
