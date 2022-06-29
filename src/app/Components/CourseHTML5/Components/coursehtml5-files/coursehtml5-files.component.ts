import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare const oRoute: any;
declare const InitWebkitPersistenStorage: any;
declare const CreateDirectory: any;
declare const GetCurrentDir: any;
declare const GetParentDir: any;
declare const ShowDirectory: any;
declare const CreateFile: any;
declare const DeleteFile: any;
declare const WriteFile: any;
declare const ReadFile: any;
declare const DeleteDirectory: any;
declare const MoveFile: any

declare const mensaje: any;

declare const FileManagement: any;


@Component({
  selector: 'app-coursehtml5-files',
  templateUrl: './coursehtml5-files.component.html',
  styleUrls: ['./coursehtml5-files.component.css']
})

export class Coursehtml5FilesComponent implements OnInit {

  //W3C Api File

  myForm!: FormGroup;
  myForm2!: FormGroup;
  myForm3!: FormGroup;
  myForm4!: FormGroup;
  oFileManagement = new FileManagement();

  constructor(private oFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    try {
      this.InitMyForms();
      InitWebkitPersistenStorage();
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > ngOnInit()");
    }
  }

  InitMyForms(): void {
    // Biding the contorls forms
    try {
      this.myForm = this.oFormBuilder.group({
        Key: "",
        Tittle: "",
        Year: ""
      });

      this.myForm2 = this.oFormBuilder.group({
        DirNameForm2: ""
      });

      this.myForm3 = this.oFormBuilder.group({
        FileNameForm3: "",
        DirNameOrigin: "",
        DirNameDest: ""
      });

      this.myForm4 = this.oFormBuilder.group({
        FileName: "",
        DirName: "",
        InnerText: ""
      });

    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > InitMyForm()");
    }
  }

  GetFile(oEvent: Event): void {
    let oFileList: FileList;
    let oFile: File;
    let oFileReader: FileReader = new FileReader();
    try {
      oFileList = ((oEvent.target as HTMLInputElement).files as FileList);
      oFile = (oFileList?.item(0) as File);

      //files properties
      console.log(oFile);
      //console.log(oFile.type);

      if (oFile.type.match("text")) {
        //Read files
        oFileReader.readAsText(oFile);
        oFileReader.onload = (oEventReader: Event) => {
          console.log(oEventReader);
        }
      }
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > GetFile()");
    }
  }

  Submit(): void {
    try {
      //console.log("Submit");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      
      if (this.myForm.status == "VALID") //form status 
      {
        this.myForm.reset();//clear all imputs
      }
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > Submit()");
    }
  }

  ViewData(): void {
    try {
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      this.oFileManagement.VeryfyPuebajs();

    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > ViewData()");
    }
  }

  Submit2(): void {
    try {
      //console.log("Submit");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      if (this.myForm2.status == "VALID") //form status 
      {
        navigator.storage.estimate().then((estimate) => { console.log(estimate) });
        CreateDirectory(this.myForm2.controls["DirNameForm2"].value);
        this.myForm2.reset();//clear all imputs
      }
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > Submit2()");
    }
  }

  GetCurrentDir(): void {
    try {
      GetCurrentDir();
      console.log(oRoute);
      GetParentDir();
      console.log(oRoute);
      this.myForm2.controls["DirNameForm2"].setValue(oRoute);
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > GetCurrentDir()");
    }
  }

  DeleteDir(): void {
    try {
      let oDirName: string;
      if (this.myForm3.status == "VALID") //form status 
      {
        oDirName = this.myForm2.controls["DirNameForm2"].value;
        DeleteDirectory(oDirName);
        this.myForm2.reset();//clear all imputs
      }
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > DeleteDir()");
    }
  }

  ViewData2(): void {
    try {
      GetCurrentDir();
      ShowDirectory("");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > ViewData2()");
    }
  }

  Submit3(): void {
    try {
      //console.log("Submit");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      if (this.myForm3.status == "VALID") //form status 
      {
        navigator.storage.estimate().then((estimate) => { console.log(estimate) });
        CreateFile(this.myForm3.controls["FileNameForm3"].value);
        this.myForm3.reset();//clear all imputs
      }
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > Submit3()");
    }
  }

  DeleteFiles(): void {
    try {
      //console.log("Submit");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      let oFileName: string;
      let oDirO: string;
      let oDirD: string;
      if (this.myForm3.status == "VALID") //form status 
      {
        oFileName = this.myForm3.controls["FileNameForm3"].value;
        oDirO = this.myForm3.controls["DirNameOrigin"].value;
        oDirD = this.myForm3.controls["DirNameDest"].value
        DeleteFile(oFileName, oDirO);
        this.myForm3.reset();//clear all imputs
      }
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > DeleteFiles()");
    }
  }

  MoveFiles(): void {
    try {
      //console.log("Submit");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      let oFileName: string;
      let oDirO: string;
      let oDirD: string;
      if (this.myForm3.status == "VALID") //form status 
      {
        oFileName = this.myForm3.controls["FileNameForm3"].value;
        oDirO = this.myForm3.controls["DirNameOrigin"].value;
        oDirD = this.myForm3.controls["DirNameDest"].value
        MoveFile(oFileName, oDirO, oDirD);
        this.myForm3.reset();//clear all imputs
      }
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > MoveFile()");
    }
  }

  ViewData3(): void {
    try {
      console.log(mensaje);
      ShowDirectory(this.myForm3.controls["DirNameOrigin"].value);
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > ViewData3()");
    }
  }

  Submit4(): void {
    try {
      let fileName: string;
      let dirName: string;
      let innerText: string;

      //console.log("Submit");
      //console.log(this.myForm.controls["Key"].value) //access to an specific input
      //console.log(this.myForm.controls["Tittle"].value) //access to an specific input
      //console.log(this.myForm.controls["Year"].value) //access to an specific input
      fileName = this.myForm4.controls["FileName"].value
      dirName = this.myForm4.controls["DirName"].value
      innerText = this.myForm4.controls["InnerText"].value

      console.log("Write File");
      WriteFile(dirName + "/" + fileName, innerText);

      this.myForm4.reset();//clear all imputs
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > Submit4()");
    }
  }

  btn_ReadFile(): void {
    try {
      let fileName: string;
      let dirName: string;
      let innerText: string;

      fileName = this.myForm4.controls["FileName"].value
      dirName = this.myForm4.controls["DirName"].value
      innerText = this.myForm4.controls["InnerText"].value

      console.log("Read File");
      ReadFile(dirName + "/" + fileName);

      this.myForm4.reset();//clear all imputs
    }
    catch (ex) {
      console.error("CourseHTML5 > Components > coursehtml5-files > coursehtml5-files.component.ts > Submit4()");
    }
  }

}
