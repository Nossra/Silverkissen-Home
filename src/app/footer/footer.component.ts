import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  public googleMapsKey: string = "https://www.google.com/maps/embed/v1/MODE?key=AIzaSyDzBEs0TxtNs2IiMeFKeyDc2kQQbslOFxY&parameters"

  ngOnInit() {
  }

}
