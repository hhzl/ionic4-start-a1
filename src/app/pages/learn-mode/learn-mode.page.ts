import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-mode',
  templateUrl: './learn-mode.page.html',
  styleUrls: ['./learn-mode.page.scss'],
})

export class LearnModePage implements OnInit {


  word: string = 'fish'; 
  translate : string = 'der Fisch';
  
  itemImageUrlPath: string = 'assets/data/pictures/';
  itemImageFileName : string = 'fish.jpg'; 

  constructor() { }

  ngOnInit() {}
  

  updateMyValue() {
     if (this.word == 'fish') {
              this.word = 'grasshopper';
              this.translate = 'die Heuschrecke';
              this.itemImageFileName = 'grasshopper.jpg' 
        } else
        {
              this.word = 'fish';
              this.translate = 'der Fisch';
              this.itemImageFileName = 'fish.jpg' 
        }
  }

}
