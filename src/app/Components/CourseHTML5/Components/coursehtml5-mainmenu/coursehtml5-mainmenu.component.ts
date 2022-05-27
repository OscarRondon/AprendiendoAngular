import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursehtml5-mainmenu',
  templateUrl: './coursehtml5-mainmenu.component.html',
  styleUrls: ['./coursehtml5-mainmenu.component.css']
})
export class Coursehtml5MainmenuComponent implements OnInit {

  menuIconClick: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  MenuIconClick(): void{
    try
    {
      if(this.menuIconClick)
        this.menuIconClick = false;
      else
        this.menuIconClick = true;
    }
    catch(ex)
    {
      console.error("CourseHTML5 > Components > coursehtml5-mainmenu > coursehtml5-mainmenu.component.ts > MenuIconClick()");
    }
  }

}
