import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-coursehtml5-geolocation',
  templateUrl: './coursehtml5-geolocation.component.html',
  styleUrls: ['./coursehtml5-geolocation.component.css']
})
export class Coursehtml5GeolocationComponent implements OnInit {

  //W3C Api Geolocation

  @ViewChild("Container") 
  Container!: ElementRef<HTMLDivElement>;

  constructor() { 
  }

  ngOnInit(): void {
  }

  GetLocation(e: Event): void{
    let getCurrentPositionParams: PositionOptions;
    try
    {
      console.log("Function get location");
      getCurrentPositionParams = {enableHighAccuracy: true, timeout: 1000, maximumAge: 6000};
      navigator.geolocation.getCurrentPosition((oPositionParam) => {this.GetCurrentPosition(oPositionParam)}, (oPositionErrorParam) => { this.GetCurrentPositionError(oPositionErrorParam)},getCurrentPositionParams);
      //navigator.geolocation.watchPosition((oPositionParam) => {this.GetCurrentPosition(oPositionParam)}, (oPositionErrorParam) => { this.GetCurrentPositionError(oPositionErrorParam)},getCurrentPositionParams);
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-geolacation > coursehtml5-geolacation.Component > GetLocation():", ex);
    }
  }

  GetCurrentPosition(oGeolocationPosition: GeolocationPosition): void{
    let oMiniContainer: HTMLDivElement;
    let oImage: HTMLImageElement;
    let UrlMap: string; //using API Google Map
    try
    {
      
      oMiniContainer =(this.Container.nativeElement.children.namedItem("MiniContainer") as HTMLImageElement);
      oImage = (oMiniContainer.children.namedItem("Map") as HTMLImageElement);
      UrlMap = "http://maps.google.com/maps/api/staticmap?size=400x400&key=<put a google maps key, is a payed service>";
      UrlMap +=  "&center="+ oGeolocationPosition.coords.latitude + "," + oGeolocationPosition.coords.longitude + ",";
      UrlMap += "&zoom=12&size=400x400&sensor=false&markers=" +  oGeolocationPosition.coords.latitude + "," + oGeolocationPosition.coords.longitude;
      oImage.src = UrlMap;
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-geolacation > coursehtml5-geolacation.Component > GetCurrentPosition():", ex);
    }
  }

  GetCurrentPositionError(oGeolocationPositionError:GeolocationPositionError): void{
    try
    {
      console.log(oGeolocationPositionError);
    }
    catch(ex)
    {
      console.error("Ex > CourseHTML5 > Components > coursehtml5-geolacation > coursehtml5-geolacation.Component > GetCurrentPositionError():", ex);
    }
  }

}
