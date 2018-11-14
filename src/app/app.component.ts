import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'portfolio';
  public language;
  public texto;
  public scrollIntoViewOptions;
  constructor(){
  	this.language= localStorage.getItem('lang') || 'ENG';
  	this.texto={
  		home:{
  			ENG: "Home",
  			ESP: "Inicio"
  		},
  		projects:{
  			ENG: "Projects",
  			ESP: "Proyectos"
  		},
  		exp:{
  			ENG: "Work Experience",
  			ESP: "Experiencia Profesional"
  		},
  		free:{
  			ENG: "Free Time",
  			ESP: "Tiempo libre"
  		},
  		contact:{
  			ENG: "Contact",
  			ESP: "Contacto"
  		}

  	}
  	this.scrollIntoViewOptions={
  	behavior: "smooth",
  	block: "start",
  	inline: "start"
  	}

  }

  ngOnInit(){
    fetch("https://iotacsmqtt.herokuapp.com").then()
    fetch("https://iotacsback.herokuapp.com").then()
    fetch("https://iotacs.herokuapp.com").then()
    fetch("https://sobrify-back.herokuapp.com").then()
  }

  scroll(element){
  	var el=document.getElementById(element)
  	el.scrollIntoView(this.scrollIntoViewOptions);
  }

  lang(lang){
  	this.language=lang;
  	localStorage.setItem('lang',lang);
  	console.log(lang)
  	location.reload();
  }

}
