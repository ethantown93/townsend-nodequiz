/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public authService: AuthService) { }

  ngOnInit() {
    
  }

}
