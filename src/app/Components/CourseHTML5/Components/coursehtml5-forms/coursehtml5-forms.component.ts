import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-coursehtml5-forms',
  templateUrl: './coursehtml5-forms.component.html',
  styleUrls: ['./coursehtml5-forms.component.css']
})

export class Coursehtml5FormsComponent implements OnInit{

  @HostListener('change',  ['$event']) //Sirve para agregar eventos globales al documento
  onChangeHostListener(e: Event) {
    // do highlight work
    console.log("onChangeHostListener  test");
    //console.log(e);
    //console.log(e.target);
    let el: HTMLElement = (e.target as HTMLElement);
    if(this.myForm.controls[(e.target as HTMLElement).id].invalid)
      el.style.background = "#FFDDDD";
    else
      el.style.background = "#FFFFFF";
    //console.log(el);
    //console.log(this.myForm.controls[(e.target as HTMLElement).id]);
  }

  myForm!: FormGroup;

  constructor(private oFormBuilder: FormBuilder) 
  { }

  ngOnInit(): void {
    try
    {
      this.myFormInit();
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-forms > coursehtml5-forms.component.ts > ngOnInit()");
    }
  }

  myFormInit(): void{
    //Biding the contorls forms
    try
    {
      this.myForm = this.oFormBuilder.group({
        eMail: ["", [Validators.email, Validators.required]],
        Search: ["", [Validators.required]],
        Pattern:"",
        Date:"",
        Time:"",
        Number:"",
        Range:"",
        DataList:"",
        Select:""
      })
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-forms > coursehtml5-forms.component.ts > ngOnInit()");
    }
  }

  Submit(): void
  {
    try
    {
      console.log("Submit");
      console.log(this.myForm.controls["Select"].value) //access to an specific input
      console.log(this.myForm.status);//Form global status
      console.log(this.myForm); //All form info
      if(this.myForm.status == "VALID") //form status
      {
        this.myForm.reset();//clear all imputs
      }
      else
      {
        try
        {
          Object.keys(this.myForm.controls).forEach(key => {
            console.log(key + ": ");
            console.log(this.myForm.get(key));
            throw "Break";
          });
        }
        catch(ex)
        {
          //Fake break
        }
      }
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-forms > coursehtml5-forms.component.ts > ngOnInit()");
    }
  }

  

}
