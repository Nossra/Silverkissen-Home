import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Litter } from '../../entities/litter';  
import { LitterService } from '../../services/LitterService/litter-service.service'; 

@Component({
  selector: 'app-current-kittens',
  templateUrl: './current-kittens.component.html',
  styleUrls: ['./current-kittens.component.css']
})
export class CurrentKittensComponent implements OnInit {

  public litters: Litter[] = new Array<Litter>();   
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
 
}
