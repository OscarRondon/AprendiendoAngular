import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coursehtml5-webstorage',
  templateUrl: './coursehtml5-webstorage.component.html',
  styleUrls: ['./coursehtml5-webstorage.component.css']
})
export class Coursehtml5WebstorageComponent implements OnInit {

  //WC3 Api Web Storage

  myForm!: FormGroup;

  constructor(private oFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    try
    {
      this.myFormInit();
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-webstorage > coursehtml5-webstorage.component.ts > ngOnInit()");
    }
  }

  myFormInit(): void{
    //Biding the contorls forms
    try
    {
      this.myForm = this.oFormBuilder.group({
        Key: "",
        Value: ""
      })
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-webstorage > coursehtml5-webstorage.component.ts > ngOnInit()");
    }
  }

  Submit(): void
  {
    try
    {
      console.log("Submit");
      console.log(this.myForm.controls["Key"].value) //access to an specific input
      console.log(this.myForm.controls["Value"].value) //access to an specific input
      console.log(this.myForm.status);//Form global status
      console.log(this.myForm); //All form info
      if(this.myForm.status == "VALID") //form status 
      {
        //it can be use sessionStorage for volatile data
        //it can be use localStorage for permanet data
        sessionStorage.setItem("Key",this.myForm.controls["Key"].value);
        sessionStorage.setItem("Value",this.myForm.controls["Value"].value);
        this.myForm.reset();//clear all imputs
      }
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-webstorage > coursehtml5-webstorage.component.ts > Submit()");
    }
  }

  ViewData(): void
  {
    try
    {
      console.log( sessionStorage.getItem("Key")) //access to an specific input
      console.log( sessionStorage.getItem("Value")) //access to an specific input
      console.log(this.myForm.controls["Value"].value) //access to an specific input
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-webstorage > coursehtml5-webstorage.component.ts > ViewData()");
    }
  }

}
