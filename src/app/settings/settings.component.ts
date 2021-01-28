import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  form= new FormGroup({
    termsPerCategory: new FormControl(),
    termsPerTopics: new FormControl(),
    numberOfTopics: new FormControl()
  });
  
}
