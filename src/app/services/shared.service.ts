import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  private url='https://freeapi.miniprojectideas.com/api/youtube/'

  getAllTickets=()=>{
    return this.http.get(this.url+'GetAllTickets')
  }
}
