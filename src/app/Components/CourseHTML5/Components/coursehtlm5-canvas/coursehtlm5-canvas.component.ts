import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-coursehtlm5-canvas',
  templateUrl: './coursehtlm5-canvas.component.html',
  styleUrls: ['./coursehtlm5-canvas.component.css']
})
export class Coursehtlm5CanvasComponent implements OnInit, AfterViewInit {

  //W3C Api Canvas

  @ViewChild("Container") 
  Container!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.SetCanvasBox1();//draw rectangles
    this.SetCanvasBox2();//set gradients
    this.SetCanvasBox3();//line tracing
    this.SetCanvasBox4();//curve line tracing
    this.SetCanvasBox5();//line type settings
    this.SetCanvasBox6();//string manage
    this.SetCanvasBox7();//Transformations
    this.SetCanvasBox8();//Image overlay
    this.SetCanvasBox9();//Image magement
    this.SetCanvasBox10();//Image magement as Data
    this.SetCanvasBox11();//Animations
    this.SetCanvasBox12(null);//Animations 2
    this.SetCanvasBoxVideo();//Video as a Canvas
  }

  SetCanvasBox1(): void{
    //rectangles drawing
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox1") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      oCanvasBox.fillRect(0,0,100,100); //filled rectangle
      oCanvasBox.strokeRect(100, 100, 50,50); //border rectangle
      oCanvasBox.globalAlpha = 0.3; //transparency
      oCanvasBox.fillStyle = "#FF8877";//Color
      oCanvasBox.fillRect(150,150,100,100);
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox1():", ex);
    }
  }

  SetCanvasBox2(): void{
    //Gradients
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    let oCanvasGradient: CanvasGradient;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox2") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      oCanvasGradient = oCanvasBox.createLinearGradient(0,0,500,300);
      oCanvasGradient.addColorStop(0, "red",);
      oCanvasGradient.addColorStop(1, "green",);
      oCanvasBox.fillStyle = oCanvasGradient;
      oCanvasBox.fillRect(0,0,500,300)
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox2():", ex);
    }
  }

  SetCanvasBox3(): void{
    //Tracing
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox3") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      
      //up triangle
      oCanvasBox.beginPath();
      oCanvasBox.moveTo(150,100);
      oCanvasBox.lineTo(250,100);
      oCanvasBox.lineTo(200, 0);
      oCanvasBox.lineTo(150,100);
      oCanvasBox.closePath();
      oCanvasBox.fill();

      //down triangle left
      oCanvasBox.beginPath();
      oCanvasBox.moveTo(100,200);
      oCanvasBox.lineTo(200,200);
      oCanvasBox.lineTo(150, 100);
      oCanvasBox.lineTo(100,200);
      oCanvasBox.closePath();
      oCanvasBox.stroke();

      //down triangle right
      oCanvasBox.fillStyle = "#FF8877";//Color
      oCanvasBox.beginPath();
      oCanvasBox.moveTo(200,200);
      oCanvasBox.lineTo(300,200);
      oCanvasBox.lineTo(250, 100);
      oCanvasBox.lineTo(200,200);
      oCanvasBox.closePath();
      oCanvasBox.fill();

       //Mask triangle right
       oCanvasBox.fillStyle = "#FF8877";//Color
       oCanvasBox.beginPath();
       oCanvasBox.moveTo(300,200);
       oCanvasBox.lineTo(400,200);
       oCanvasBox.lineTo(350, 100);
       oCanvasBox.lineTo(300,200);
       oCanvasBox.clip();//Mask command

       oCanvasBox.beginPath();
       for(let i:number = 100; i <= 200; i+=5)
       {
         oCanvasBox.moveTo(200,i);
         oCanvasBox.lineTo(400, i);
         
       }
       oCanvasBox.closePath();
       oCanvasBox.stroke();
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox3():", ex);
    }
  }

  SetCanvasBox4(): void{
    //curve lines drawing
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox4") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      
      oCanvasBox.beginPath();
      oCanvasBox.arc(50,50,50,0,Math.PI,false);
      oCanvasBox.stroke();

      oCanvasBox.beginPath();
      oCanvasBox.moveTo(150,50)
      oCanvasBox.quadraticCurveTo(300,125,150,200);
      oCanvasBox.stroke();

      oCanvasBox.beginPath();
      oCanvasBox.moveTo(300,50)
      oCanvasBox.bezierCurveTo(200,125,400,125,300,200);
      oCanvasBox.stroke();
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox4():", ex);
    }
  }

  SetCanvasBox5(): void{
    //curve lines drawing
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox5") as HTMLCanvasElement);
      oCanvasElement.width = 800;
      oCanvasElement.height = 500;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      
      
      oCanvasBox.fillStyle = "yellow";
      oCanvasBox.beginPath();
      oCanvasBox.arc(400,250,100,0,Math.PI*2,false);
      oCanvasBox.fill();

      oCanvasBox.fillStyle = "black";
      oCanvasBox.lineWidth = 2;
      oCanvasBox.beginPath();
      oCanvasBox.arc(400,250,100,0,Math.PI*2,false);
      oCanvasBox.stroke();

      oCanvasBox.beginPath();
      oCanvasBox.arc(400,260,50,0,Math.PI,false);
      oCanvasBox.lineWidth = 3;
      oCanvasBox.lineCap = "round";
      oCanvasBox.stroke();

      oCanvasBox.beginPath();
      oCanvasBox.arc(370,215,15,0,Math.PI*2,false);
      oCanvasBox.fill();

      oCanvasBox.beginPath();
      oCanvasBox.arc(430,215,15,0,Math.PI*2,false);
      oCanvasBox.fill();

      
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox5():", ex);
    }
  }

  SetCanvasBox6(): void{
    //string management
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox6") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object

      oCanvasBox.font = "bold 24px Roboto";
      oCanvasBox.textAlign = "start";
      oCanvasBox.textBaseline = "bottom";
      oCanvasBox.fillText("Hello World!!", 50, 50);
      oCanvasBox.moveTo(50,50);
      oCanvasBox.lineTo(260,50);
      oCanvasBox.stroke();

      oCanvasBox.font = "bold 24px Roboto";
      oCanvasBox.shadowColor = "rgba(0,0,0,0.5)";
      oCanvasBox.shadowOffsetX = 3;
      oCanvasBox.shadowOffsetY = 2;
      oCanvasBox.shadowBlur = 4;
      oCanvasBox.textAlign = "start";
      oCanvasBox.textBaseline = "top";
      oCanvasBox.fillText("Hello World 2!!", 50, 100);
      let mesures: TextMetrics = oCanvasBox.measureText("Hello World 2!!");
      oCanvasBox.strokeRect(50,100, mesures.width, 24);
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox6():", ex);
    }
  }

  SetCanvasBox7(): void{
    //Transformations management
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox7") as HTMLCanvasElement);
      oCanvasElement.width = 1200;
      oCanvasElement.height = 900;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      oCanvasBox.font = "bold 24px Roboto";
      oCanvasBox.textAlign = "start";
      oCanvasBox.textBaseline = "bottom";
      oCanvasBox.fillText("Hello World!!", 50, 50);
      oCanvasBox.stroke();

      oCanvasBox.translate(100,100); //move de start point 0,0
      oCanvasBox.scale(3,1);//set the size of an object (x,y)
      oCanvasBox.rotate(Math.PI); //rotate an object in radians degrees
      oCanvasBox.fillText("Hello World!!", -100, -150);
      oCanvasBox.stroke();
      
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox7():", ex);
    }
  }

  SetCanvasBox8(): void{
    //Image Overlay
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox8") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object

      oCanvasBox.fillStyle = "#880000";
      oCanvasBox.fillRect(100,50,200, 100);
      oCanvasBox.globalCompositeOperation = "lighter"; //Documentation & Examples at https://www.w3schools.com/tags/canvas_globalcompositeoperation.asp

      oCanvasBox.fillStyle = "#AAAAFF"
      oCanvasBox.font = "bold 50px Roboto";
      oCanvasBox.textAlign = "center";
      oCanvasBox.textBaseline = "middle";
      oCanvasBox.fillText("Hello world!", 200,100);
      
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox8():", ex);
    }
  }

  SetCanvasBox9(): void{
    //Image management
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    let  oImage: HTMLImageElement = new Image();
    try
    {
      
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox9") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      oImage.src = "/assets/CourseHTML5/Images/6.jpg";
      oImage.onload = () =>{
        oCanvasBox.drawImage(oImage,20,20);
        oCanvasBox.drawImage(oImage,250,100, 50,50);
        oCanvasBox.drawImage(oImage,25,25, 75,75,325,100,150,150);
      }
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox9():", ex);
    }
  }

  SetCanvasBox10(): void{
    //Image management as Data
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    let oImage: HTMLImageElement = new Image();
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox10") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      oImage.src = "/assets/CourseHTML5/Images/3.jpg";
      oImage.onload = () => { this.ManageImage(oImage, oCanvasBox) };
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox10():", ex);
    }
  }

  ManageImage(oImage: HTMLImageElement, oCanvasBox: CanvasRenderingContext2D): void{
    let oImageData: ImageData;
    let pos: number;
    try
    {
      oCanvasBox.drawImage(oImage, 50, 50);
      oImageData = oCanvasBox.getImageData(0,0,200,200);
      
      for(let n: number = 0; n < 100; n++)
        for(let m: number = 0; m < 100; m++)
        {
          pos = (oImageData.width*4*m) + (n*4);
          oImageData.data[pos] = 255 - oImageData.data[pos]; //red color of the pixel
          oImageData.data[pos+1] = 255 - oImageData.data[pos+1];//green color of the pixel
          oImageData.data[pos+2] = 255 - oImageData.data[pos+2];//blue color of the pixel
          oImageData.data[pos+3] = oImageData.data[pos+3];//alpha color of the pixel
        }
        oCanvasBox.putImageData(oImageData, 0,0);
        
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > ManageImage():", ex);
    }
  }

  SetCanvasBox11(): void{
    //Animation
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    let falling: boolean;
    let xAxis: number;
    let yAxis: number;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox11") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      falling = true;
      xAxis = 200;
      yAxis = 50;
      setInterval(function(){
        if(falling)
        {
          if(yAxis >= 280)
          {
            falling = false;
            yAxis-=5;
          }
          else
            yAxis+= 5;
        }
        else
        {
          if(yAxis <= 20)
          {
            falling = true;
            yAxis+=5;
          }
          else
            yAxis-= 5;
        }
        oCanvasBox.clearRect(0,0,500,300);
        oCanvasBox.beginPath();
        oCanvasBox.arc(xAxis,yAxis, 20,0,2*Math.PI, false);
        oCanvasBox.fill();
      },50);
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox11():", ex);
    }
  }

  SetCanvasBox12(e: any): void{
    //Animation 2
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    let xCenter: number;
    let yCenter: number;
    let xCenterMouse: number;
    let yCenterMouse: number;
    let xAxis: number;
    let yAxis: number;
    let angle: number;
    try
    {
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBox12") as HTMLCanvasElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object

      oCanvasBox.clearRect(0,0,500,300);
      oCanvasBox.beginPath();
      oCanvasBox.arc(250,150, 20, 0,2*Math.PI, false);
      oCanvasBox.stroke();
      xCenter = 250;
      yCenter = 150;
      xCenterMouse = 250;
      yCenterMouse = 150;
      if(e == null){
        oCanvasBox.beginPath();
        oCanvasBox.arc(250,150, 10, 0,2*Math.PI, false);
        oCanvasBox.fill();
      }
      else
      {
        xCenterMouse = e.offsetX;
        yCenterMouse = e.offsetY;
        angle = Math.atan2(xCenterMouse - xCenter, yCenterMouse - yCenter);
        xAxis = xCenter +Math.round(Math.sin(angle)*10);
        yAxis = yCenter +Math.round(Math.cos(angle)*10);
        oCanvasBox.beginPath();
        oCanvasBox.arc(xAxis,yAxis, 10, 0,2*Math.PI, false);
        oCanvasBox.fill();
      }

    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBox12():", ex);
    }
  }

  SetCanvasBoxVideo(): void{
    //Image management as Data
    let oCanvasElement: HTMLCanvasElement;
    let oCanvasBox: CanvasRenderingContext2D;
    let oVideo:HTMLVideoElement;
    try
    {
      //oVideo = (this.Container.nativeElement.children.namedItem("myVideo") as HTMLVideoElement);
      oCanvasElement = (this.Container.nativeElement.children.namedItem("CanvasBoxVideo") as HTMLCanvasElement);
      oVideo = (oCanvasElement.children.namedItem("myVideo") as HTMLVideoElement);
      oCanvasElement.width = 500;
      oCanvasElement.height = 300;
      oCanvasBox = (oCanvasElement.getContext("2d") as CanvasRenderingContext2D); //Casting object
      oVideo.src = "/assets/CourseHTML5/Videos/video-2012-04-05-14-22-32.m4a";
      oVideo.onplay = () => {
        (function loop() {
          if (!oVideo.paused && !oVideo.ended) {
            oCanvasBox.drawImage(oVideo, 0, 0, 300, 200);
            setTimeout(loop, 1000 / 60); // drawing at 60fps
          }
        })();
      }
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-canvas > coursehtml5-canvas.Component > SetCanvasBoxVideo():", ex);
    }
  }

}
