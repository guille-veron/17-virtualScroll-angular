import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  paises : any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get(`https://restcountries.com/v2/lang/es`)
      .subscribe(paises => this.paises = paises)
  }

  drop(evt: CdkDragDrop<any>){
    moveItemInArray(this.paises, evt.previousIndex, evt.currentIndex);
  }

}
