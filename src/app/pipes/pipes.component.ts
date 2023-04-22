import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
   public name= "hii i am rupam saha";
  
  public name2= "THIS IS LOWERCASE";
  public person={
    name:'rupam',
    age:27,
    height:5.9
  }
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  
  public mydate  = new Date();
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
