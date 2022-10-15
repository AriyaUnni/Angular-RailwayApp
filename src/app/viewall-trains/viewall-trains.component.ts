import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewall-trains',
  templateUrl: './viewall-trains.component.html',
  styleUrls: ['./viewall-trains.component.css']
})
export class ViewallTrainsComponent implements OnInit {

  constructor() { }

  name="Anna"

  readValues=()=>{
    let data={
      "name":this.name="Raju"
    }

    console.log(data)
  }

  ngOnInit(): void {
  }

}
