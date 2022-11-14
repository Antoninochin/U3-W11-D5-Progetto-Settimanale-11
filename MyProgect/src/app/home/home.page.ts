import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  alert('Perchè non ti registri invece di cliccare qui? :D')
}

}
