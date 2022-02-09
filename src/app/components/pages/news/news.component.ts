import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  users: User[] = [];

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Actualités");  
  }

}
