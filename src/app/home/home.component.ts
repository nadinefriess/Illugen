import { Component } from '@angular/core';
import * as data from '../../assets/data.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Illugen';
  result: string[];

  private returnRendomIndexFromTermList(listLength:number):number{
    const RANDOM = Math.floor(Math.random() * listLength);
    return RANDOM;
  }

  private collectRandomTerms(list:any):void{
    list.forEach((item, ind) => {
      var randomIndex = this.returnRendomIndexFromTermList(list[ind].term.length);
      this.result.push(item.term[randomIndex]);
    });
  }

  public onGenerateClick():void{
    this.result = [];
    this.collectRandomTerms(data.default.topicList);
    this.collectRandomTerms(data.default.categoryList);
  }
}
