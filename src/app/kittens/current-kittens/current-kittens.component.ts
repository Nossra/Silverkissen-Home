import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Litter } from '../../entities/litter';  
import { LitterService } from '../../services/LitterService/litter-service.service'; 
import { ErrorIntercept } from '../../services/ErrorIntercept';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-current-kittens',
  templateUrl: './current-kittens.component.html',
  styleUrls: ['./current-kittens.component.css']
})
export class CurrentKittensComponent implements OnInit {

  public litters: Litter[] = new Array<Litter>();   
  public loading : boolean = true;
  public amountOfLitters:number;
  public error: boolean = false;
  constructor(
    private litterService: LitterService,
    private router:Router) { 

  }

  ngOnInit() {
    this.litterService.getActiveLitters()
    .pipe(first())
    .subscribe(x => {  
      this.litters = x;   
      this.loading = false;
      this.amountOfLitters = x.length; 
    },
    error => {
      this.loading = false;
      this.error = true;
    })
  }  

  getKittensText(number:number) {
    switch(number) {
      case 1: return "unge"
      default : return "ungar"
    }
  }
 
  getDeliveryDate(date:Date) {
    return date.toString().substring(0,date.toString().indexOf("T"))
  }
}
