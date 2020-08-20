import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  servers = [
    {name: 'Server 1', status:'Activate'},
    {name: 'Server 2', status:'InActivate'},
    {name: 'Server 3', status:'InActivate'},
    {name: 'Server 4', status:'Activate'},
  ];
  id: number;
  server: any;
  constructor(public route:ActivatedRoute)
   {
     
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      console.log(param.get("id"));
    });
     
    
  }

}
