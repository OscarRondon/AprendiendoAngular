import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-coursehtml5-draganddrop',
  templateUrl: './coursehtml5-draganddrop.component.html',
  styleUrls: ['./coursehtml5-draganddrop.component.css']
})
export class Coursehtml5DraganddropComponent implements OnInit, AfterViewInit {

  //W3C Api Drag and Drop

  @ViewChild("Container") 
  Container!: ElementRef<HTMLDivElement>;

  @ViewChild("Container2") 
  Container2!: ElementRef<HTMLDivElement>;

  oElementDraged!: HTMLElement;
  oElementDest!: HTMLElement;
  canDrop: boolean = false;

  @HostListener('dragenter',  ['$event']) //Sirve para agregar eventos globales al documento
  onDragEnter(e: Event) {
    e.preventDefault();
  }

  @HostListener('dragover',  ['$event'])
  onDragOver(e: Event) {
    e.preventDefault();
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void{
    try
    {
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-draganddrop > coursehtml5-draganddrop.Component > ngAfterViewInit():", ex);
    }
  }

  Drop(e: Event): void{
    try
    {
      //console.log((e as DragEvent).dataTransfer?.getData("Text"));
      if(this.canDrop)
      {
        this.oElementDest = (e.currentTarget as HTMLElement);
        this.oElementDest.appendChild(this.oElementDraged);
        this.canDrop = false;
      }
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-draganddrop > coursehtml5-draganddrop.Component > Drop():", ex);
    }
  }

  BeginDrag(e: Event): void{
    try
    {
      //(e as DragEvent).dataTransfer?.setData("Text", "Prueba");
      //console.log((e as DragEvent).dataTransfer?.getData("Text"));
      if((e.target as HTMLElement).nodeName != "DIV")
      {
        this.oElementDraged = (e.target as HTMLElement);
        this.canDrop = true;
        
      }
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-draganddrop > coursehtml5-draganddrop.Component > BeginDrag():", ex);
    }
  }

  DropArchive(e: Event): void{
    let oDragEvent: DragEvent;
    let oFiles: FileList;
    try
    {
      //console.log((e as DragEvent).dataTransfer?.getData("Text"));
      e.preventDefault();
      oDragEvent = (e as DragEvent);
      oFiles = (oDragEvent.dataTransfer?.files as FileList);
      console.log(oFiles);
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-draganddrop > coursehtml5-draganddrop.Component > DropArchive():", ex);
    }
  }

}
