import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameService: NameService = new NameService();

  public name: any;
  constructor() {
    this.name = this.nameService.getRandomName();
  }

  ngOnInit(): void {
  }

}
