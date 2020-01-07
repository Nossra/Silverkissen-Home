import { Component, OnInit } from '@angular/core';
import { LitterService } from '../../services/LitterService/litter-service.service';
import { Router } from '@angular/router';
import { Litter } from '../../entities/litter';

@Component({
  selector: 'app-former-kittens',
  templateUrl: './former-kittens.component.html',
  styleUrls: ['./former-kittens.component.css']
})
export class FormerKittensComponent implements OnInit {

  public litters: Litter[] = new Array<Litter>();   
  public loading : boolean = true;
  
  constructor(
    private litterService: LitterService,
    private router:Router
  ) { }

  ngOnInit() {
    this.litterService.getEarlierLitters().subscribe(x => {
      this.litters = x;   
      this.loading = false;
    })
  }

}
