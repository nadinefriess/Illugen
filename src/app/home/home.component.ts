import { Component } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Illugen';
  result: string[];

  constructor(public dataService: DataService) {}

  public onGenerateClick():void{
    this.result = this.dataService.getRandomTerms();
  }
}
