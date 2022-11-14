import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbNavConfig], // add NgbNavConfig to the component providers
})
export class NavbarComponent implements OnInit {

  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}

  ngOnInit(): void {
  }
  fake(){
    alert('Questa pagina non esiste veramente :(')
  }
}
