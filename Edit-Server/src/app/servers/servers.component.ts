import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(public router:Router) 
  {

   }

  ngOnInit(): void {
  }
  onClick(index: number){
    this.router.navigate(["edit",index])
  }

}
