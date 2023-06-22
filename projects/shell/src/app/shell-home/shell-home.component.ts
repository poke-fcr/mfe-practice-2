import { Component } from '@angular/core';
import { LibraryService } from 'library';

@Component({
  selector: 'app-shell-home',
  templateUrl: './shell-home.component.html',
  styleUrls: ['./shell-home.component.css']
})
export class ShellHomeComponent {

  constructor(private libSvc: LibraryService){}
  submit(value: string){
    this.libSvc.setUserId(value)
    alert("Value have been stored in shared library service, navigate to mfe project to retreive.")
  }
}
