import { Component, OnInit } from '@angular/core';
import { Litter } from '../entities/litter';
import { LitterService } from '../services/LitterService/litter-service.service';  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private litterService: LitterService) { }
  public litters:Litter[] = new Array<Litter>() 
  public loading : boolean = true
  ngOnInit() {
    this.litterService.getActiveLitters().subscribe(x => {
      this.litters = x;
      this.loading = false; 
    }) 
  
      // document.getElementById("imageSection_1").innerHTML = "<img src=\"../assets/random_kattunge.jpg\" alt=\"ragdollungar till salu\" style=\"height:300px; max-width:100%;border-radius:10px;\">"
      // document.getElementById("imageSection_2").innerHTML = "<img src=\"../assets/vilde_2_sover.jpg\" alt=\"kattungar kronoberg\" style=\"height:300px; max-width:100%;border-radius:10px;\">"
      // document.getElementById("imageSection_3").innerHTML = "<img src=\"../assets/scamander_siri.jpg\" alt=\"köpa kattunge\" style=\"height:300px; max-width:100%;border-radius:10px;\">"
 
  } 

  getLitterText(litterCount:number) :string {
    if (litterCount > 9) {
      return "Vi har sjukt många kullar på gång i dagsläget"
    } else if (litterCount == 1) {
      return "Vi har för tillfället " + this.numberToString(litterCount) + " kull på gång";
    } else if (litterCount == 0) {
      return "Tyvärr har vi inga kullar i dagsläget"
    } else {
      return "Vi har för tillfället " + this.numberToString(litterCount) + " kullar på gång";
    }
  }

  numberToString(number:number):string {
    switch(number) {
      case 1: return "en";
      case 2: return "två";
      case 3: return "tre";
      case 4: return "fyra";
      case 5: return "fem";
      case 6: return "sex";
      case 7: return "sju";
      case 8: return "åtta";
      case 9: return "nio"; 
    }

  }

}
