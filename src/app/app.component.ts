import { Component, Input } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input() feature: Boolean;
  feature: Boolean;
   enableFeature(event: string){
    if(event == 'recipe'){
      this.feature = true;
    }else{
      this.feature = false;
    }
  }
}
