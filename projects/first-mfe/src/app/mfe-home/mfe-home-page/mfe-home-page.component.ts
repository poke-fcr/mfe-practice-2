import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'library';

@Component({
  selector: 'app-mfe-home-page',
  templateUrl: './mfe-home-page.component.html',
  styleUrls: ['./mfe-home-page.component.css']
})
export class MfeHomePageComponent implements OnInit {
  id: string = ""
  constructor(private libSvc: LibraryService){ }
  
  ngOnInit(){
    this.id = this.libSvc.getUserId
  }

}
