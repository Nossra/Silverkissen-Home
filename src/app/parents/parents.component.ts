import { Component, OnInit } from '@angular/core';
import { Cat } from '../entities/cat'; 
import { CatService } from '../services/CatService/cat-service.service'; 

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent implements OnInit {

  public parents: Array<Cat> = new Array<Cat>();
  public mothers: Array<Cat> = new Array<Cat>();
  public fathers: Array<Cat> = new Array<Cat>();
  public loading : boolean = true;
  constructor(public catService:CatService) { }

  ngOnInit() {
    this.catService.getParents().subscribe(x => {
      this.parents = x;  
      for (let parent of this.parents) {
        if (parent.sex == "Hane") {
          this.fathers.push(parent)
        } else {
          this.mothers.push(parent);
        }
      }
      this.loading = false;
    });
  }

    noteLimiter(notes: string) {
    let limit:number = 100;
    if (notes.length > limit) {
      return notes.substring(0,limit) + "...";
    } 
    return notes
  } 

  

}
