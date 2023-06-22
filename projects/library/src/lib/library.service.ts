import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  private userId: string = ""

  public get getUserId(){
    return this.userId;
  }

  public setUserId(id: string){
    this.userId = id;
  }


}
