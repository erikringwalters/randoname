import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(
    // private http: HttpClient
    ) {
    // this.http.get('assets/results/tesCharacters.txt', {responseType: 'text'})
    // .subscribe(data => console.log(data));
  }

}
