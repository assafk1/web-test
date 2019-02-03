import { Component, OnInit } from '@angular/core';
import {Slider} from './slider'


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  sliders: Slider[] = [ 
    {index:0, imId: 'im1', url: 'https://www.w3schools.com/w3images/workbench.jpg'},
    {index:1, imId: 'im2', url: 'https://www.w3schools.com/w3images/coffee.jpg'},
    {index:2, imId: 'im3', url: 'https://www.w3schools.com/w3images/sound.jpg'}
  ]

  slides: String[] = ['im1', 'im2', 'im3'];
  index: number = 2;
  prevPushed: boolean = false;
  nextPushed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getNextIndex() {
    return (this.index + 1) % 3;
  }

  getPrevIndex() {
    if (this.index == 0) {
      return 2;
    } else {
      return this.index-1;
    }
  }

  prev() {
    this.index = this.getPrevIndex();
    this.nextPushed = false;
    this.prevPushed = true;
  }

  next() {
    this.index = this.getNextIndex();
    this.nextPushed = true;
    this.prevPushed = false;
  }

}
