import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-coursehtml5-indexeddb',
  templateUrl: './coursehtml5-indexeddb.component.html',
  styleUrls: ['./coursehtml5-indexeddb.component.css']
})
export class Coursehtml5IndexeddbComponent implements OnInit {

  //W3C Api Indexed DB

  myForm!: FormGroup;
  oIDBOpenDBRequest!: IDBOpenDBRequest;
  oIDBDatabase!: IDBDatabase;

  constructor(private oFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    try
    {
      this.InitmyDB();
      this.InitMyForm();
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-indexeddb > coursehtml5-indexeddb.component.ts > ngOnInit()");
    }
  }

  InitmyDB(): void{
    try
    {
      this.oIDBOpenDBRequest = indexedDB.open("CourseHTML5_IDB");

      this.oIDBOpenDBRequest.onsuccess = (oEvent: Event) => { 
        this.oIDBDatabase = (oEvent.target as IDBOpenDBRequest).result;
      };

      this.oIDBOpenDBRequest.onupgradeneeded = (oEvent: Event) => { 
        this.oIDBDatabase = (oEvent.target as IDBOpenDBRequest).result;
        this.oIDBDatabase.createObjectStore("Game", {keyPath: "Key"});
      };
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-indexeddb > coursehtml5-indexeddb.component.ts > InitmyDB()");
    }
  }

  InitMyForm(): void{
    //Biding the contorls forms
    try
    {
      this.myForm = this.oFormBuilder.group({
        Key: "",
        Tittle: "",
        Year: ""
      })
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-indexeddb > coursehtml5-indexeddb.component.ts > InitMyForm()");
    }
  }

  Submit(): void
  {
    let oTransaction: IDBTransaction;
    let oStorage: IDBObjectStore;
    let oAdd: IDBRequest<IDBValidKey>;
    try
    {
      //console.log("Submit");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      if(this.myForm.status == "VALID") //form status 
      {
        //console.log(this.oIDBOpenDBRequest);
        //console.log(this.oIDBDatabase);
        oTransaction = this.oIDBDatabase.transaction(["Game"], "readwrite");
        oStorage = oTransaction.objectStore("Game");
        oAdd = oStorage.add({
          Key: this.myForm.controls["Key"].value, 
          Tittle: this.myForm.controls["Tittle"].value, 
          Year: this.myForm.controls["Year"].value
        });
        this.myForm.reset();//clear all imputs
      }
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-indexeddb > coursehtml5-indexeddb.component.ts > Submit()");
    }
  }

  ViewData(): void
  {
    let oTransaction: IDBTransaction;
    let oStorage: IDBObjectStore;
    let oCursor: IDBRequest<IDBCursorWithValue|null>;
    let oGet: IDBRequest<IDBValidKey[]>;
    try
    {
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      oTransaction = this.oIDBDatabase.transaction(["Game"], "readonly");
      oStorage = oTransaction.objectStore("Game");
      oCursor = oStorage.openCursor();
      oCursor.onsuccess = (oEvent: Event) => { 
        let oReader: IDBCursorWithValue;
        oReader = (oEvent.target as IDBRequest).result;
        
        if(oReader){
          console.log(oReader.value);
          console.log(oReader.value["Key"]);
          oReader.continue();
        }
      };

      //oGet = oStorage.getAllKeys();
      //console.log(oGet);
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-indexeddb > coursehtml5-indexeddb.component.ts > ViewData()");
    }
  }

}
