import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CatService } from '../../services/CatService/cat-service.service';
import { Cat } from '../../entities/cat';

@Component({
  selector: 'app-readmore-parents',
  templateUrl: './readmore-parents.component.html',
  styleUrls: ['./readmore-parents.component.css']
})
export class ReadmoreParentsComponent implements OnInit {

  constructor(
    public activatedRouter:ActivatedRoute,
    public catService:CatService) { }
    public parent:Cat;
    public parentId:number;

  ngOnInit() {
    this.activatedRouter.params.subscribe(x => {
      this.parentId = x["id"];
    });
    // this.catService.get(this.litterID).subscribe(x => {
    //   // this.litter = x;
    //   // this.vaccinated = x["vaccinated"];
    //   // this.pedigree = x["pedigree"];
    //   // this.chipped = x["chipped"];
    //   // this.litter.formattedReadyDate = Helpers.dateHelper(new Date(x["readyDate"]));
    //   // this.litter.statusText = Helpers.statusHelper(x["status"]);
    //   // this.litter.formattedBirthDate = Helpers.dateHelper(new Date(x["birthDate"]));
    //   // this.loading = false;
    //   this.litter = x;
    // })

    this.catService.findById(this.parentId).subscribe(x => {
      this.parent = x;
    })
  }

}
