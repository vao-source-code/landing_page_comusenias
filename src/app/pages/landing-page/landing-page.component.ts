import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public cards = [
    {
      title:'Diseño creativo',
      description:'Combina la funcionalidad con la estética de una manera única.Utiliza colores, tipografías y elementos visuales atractivos para crear una experiencia agradable para el usuario.',
      icon:'assets/check.svg'
    },
    {
      title:'Facil de usar',
      description:'La interfaz de usuario es intuitiva y fácil de navegar, lo que facilita a los usuarios aprender y practicar la lengua de señas de manera efectiva.',
      icon:'assets/check.svg'
    },
    {
      title:'Mejor experiencia de usuario',
      description:'Incorpora elementos visuales y recursos interactivos que hacen que el proceso de aprendizaje sea atractivo y memorable. La atención al detalle en el diseño refuerza la autenticidad de la aplicación y su compromiso con la accesibilidad.',
      icon:'assets/check.svg'
    }
  ]

  public equipo = [
    {
      img:'assets/pablo.png',
      nombre:'Pablo Carballo',
      profesion:'Mobile Developer',
      rol:'Scrum máster',
      linkedin:'https://www.linkedin.com/in/pablojaviercarballo/',
      github:'https://github.com/pableArg'
    },
    {
      img:'assets/victor.svg',
      nombre:'Victor Orue',
      profesion:'Mobile Developer',
      rol:'Dev Ops',
      linkedin:'https://www.linkedin.com/in/victor-adrian-orue/',
      github:'https://github.com/vao-source-code'
    },
    {
      img:'assets/juan.svg',
      nombre:'Juan Guerrero',
      profesion:'Mobile Developer',
      rol:'Product Owner',
      linkedin:'https://www.linkedin.com/in/juan-matias-guerrero-aguilar-a8b389184/',
      github:'https://github.com/juanmatiasg'
    },
    {
      img:'assets/fernando.svg',
      nombre:'Fernando Benitez',
      profesion:'Mobile Developer',
      rol:'Product Manager',
      linkedin:'https://www.linkedin.com/in/fernando-benitez-151287193/',
      github:'https://github.com/ferseba18'
    },
    {
      img:'assets/fabian.svg',
      nombre:'Fabian Zarate',
      profesion:'Mobile Developer',
      rol:'Frontend Designer',
      linkedin:'https://www.linkedin.com/in/fabian-alejandro-zarate/',
      github:'https://github.com/lanzarlosdados'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
