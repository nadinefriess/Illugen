import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  title = 'Illugen';
  result$: Observable<string[]>;

  constructor(public appService: AppService) {}

  public onGenerateClick():void{
    this.result$ = this.appService.getRandomTerms();
  }
}
