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
  constructor(
    public activatedRouter:ActivatedRoute,
    public litterService:LitterService) { }
    public litter: Litter;
  ngOnInit() {
    this.activatedRouter.params.subscribe(x => {
      this.litterID = x["id"];
    });
    this.litterService.getLitterById(this.litterID).subscribe(x => {
      // this.litter = x;
      // this.vaccinated = x["vaccinated"];
      // this.pedigree = x["pedigree"];
      // this.chipped = x["chipped"];
      // this.litter.formattedReadyDate = Helpers.dateHelper(new Date(x["readyDate"]));
      // this.litter.statusText = Helpers.statusHelper(x["status"]);
      // this.litter.formattedBirthDate = Helpers.dateHelper(new Date(x["birthDate"]));
      // this.loading = false;
      this.litter = x;
    })
  }

}
