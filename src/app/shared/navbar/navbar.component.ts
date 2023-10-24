import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public sidebarItems = [
    {label:'Nuestra App',url:'#nuestraApp'},
    {label:'Funciones', url:'#funciones'},
    {label:'Nuestro Equipo', url:'#nuestroEquipo'},
    {label:'Contacto', url:'#contacto'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
