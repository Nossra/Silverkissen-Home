import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CatService } from '../../services/CatService/cat-service.service';
import { Cat } from '../../entities/cat';
import { Image } from '../../entities/image';

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
    public loading : boolean = true;

  ngOnInit() {
    this.activatedRouter.params.subscribe(x => {
      this.parentId = x["id"]; 
    }); 

    this.catService.findById(this.parentId).subscribe(x => {
      this.parent = x;
      this.loading = false;
    })
  }

}
