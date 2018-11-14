import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {texto} from './texto';
@Component({
	selector: 'app-home',
	templateUrl: '../views/home.html',
  	providers: [],
  	styles:['.artist-list{padding-bottom: 10px;}']
})

export class HomeComponent implements OnInit{
	title = 'portfolio';
	description = texto.description[localStorage.getItem("lang")]
	constructor(

		private _route: ActivatedRoute,
		private _router: Router,
	){

		console.log()
	}
	ngOnInit(){

	}
}