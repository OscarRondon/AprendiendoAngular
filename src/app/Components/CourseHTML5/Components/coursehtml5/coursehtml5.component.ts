
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-coursehtml5',
  templateUrl: './coursehtml5.component.html',
  styleUrls: ['./coursehtml5.component.css']
})

export class Coursehtml5Component implements OnInit, AfterViewInit{
  
  @ViewChild("rootVideoManage") 
  rootVideoManage!: ElementRef;

  @ViewChild("myVideo") 
  myVideo!: ElementRef;

  @ViewChild("progress") 
  progressBar!: ElementRef;

  constructor()
  { 

  }
  
  ngOnInit(): void 
  {
  }

  ngAfterViewInit(): void
  {

  }

  Greetings(): void
  {
    alert("Hello World.!!!");
  }

  videoPlay(e: any): void
  {
    let eventElement: Element;
    let rootVideoManageElement: HTMLDivElement;
    let buttonPlay: HTMLButtonElement|null;
    let videoElement: HTMLVideoElement;
    let progressBarElement: HTMLProgressElement;
    let loop: any;
    try
    {
      eventElement = (e.currentTarget as Element);
      rootVideoManageElement = this.rootVideoManage.nativeElement;
      buttonPlay = rootVideoManageElement.getElementsByTagName("button").namedItem(eventElement.id);
      videoElement = this.myVideo.nativeElement;
      progressBarElement = this.progressBar.nativeElement;

      if(buttonPlay?.innerText == "Play")
      {
        videoElement.play();
        if(progressBarElement.max == 1)
        {
          progressBarElement.max = videoElement.duration;
        }
        loop = setInterval(function(){progressBarElement.value = videoElement.currentTime},10)
        buttonPlay!.innerText = "Pause"
      }
      else
      {
        videoElement.pause();
        buttonPlay!.innerText = "Play"
      }
    }
    catch(ex)
    {
      console.error("Ex > coursehtml5.Component > ProgressBar():", ex);
    }
    
  }

  SetVideoProgress(e: any): void
  {
    let progressBarElement: HTMLProgressElement;
    let videoElement: HTMLVideoElement;
    let time: number;
    try
    {
      progressBarElement = this.progressBar.nativeElement;
      videoElement = this.myVideo.nativeElement;
      if(videoElement.paused == false && videoElement.ended == false)
      {
        time = e.offsetX*videoElement.duration/progressBarElement.offsetWidth
        videoElement.currentTime = time;
        progressBarElement.value = time;
      }
    }
    catch(ex)
    {
      console.log("Ex > coursehtml5.Component > SetVideoProgress():", ex);
    }
  }
}