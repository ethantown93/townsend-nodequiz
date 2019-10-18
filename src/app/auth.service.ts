/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = '/api/login'
  private quizUrl = '/api/quiz/'
  private resultsUrl = '/api/post'
  private summaryUrl = '/api/summary/'

  constructor(private http: HttpClient, private router : Router) { }

  postQuiz(data) {
    
    console.log(data + ' from servie');
    return this.http.post<any>(this.resultsUrl, data);
  }

  login(user) {

    return this.http.post<any>(this.loginUrl, user)
  }

  getResults(employeeId) {
    console.log(employeeId)
    return this.http.get<any>(this.summaryUrl + employeeId)
  }

  getQuiz(quizId) {
    return this.http.get<any>(this.quizUrl + quizId);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

}
