import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  
  constructor() { 
    console.log('Traer a Morty');
  }

  ngOnInit(): void {
  }

}
