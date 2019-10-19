/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cumulative-summary',
  templateUrl: './cumulative-summary.component.html',
  styleUrls: ['./cumulative-summary.component.css']
})
export class CumulativeSummaryComponent implements OnInit {

  employeeId: any;
  results: any= {};
  allResults: any = {};

  constructor(private auth: AuthService, private http: HttpClient) {

  }

  ngOnInit() {
 
    this.getUser()

    this.auth.getResults(this.employeeId).subscribe( res => {
      if(res) {
        this.results = res;
        console.log(this.results)
      }
    });

    this.auth.getAllResults().subscribe( res => {
      console.log(res);
      if(res){
        this.allResults = res;
      } else {
        console.log('error')
      }

    })

  }

  getUser() {
    this.employeeId = localStorage.getItem('user');
    console.log(this.employeeId);
  }


}
