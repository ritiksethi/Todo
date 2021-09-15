import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  jsonData:any
  p: number = 1;

  constructor(private service:GlobalService) { }

  ngOnInit(): void {
    this.service.getConfig().subscribe(data =>{
      this.jsonData = data;
    });
  }


}
