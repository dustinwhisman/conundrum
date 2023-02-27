import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrls: ['./game-selection.component.css'],
})
export class GameSelectionComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content:
        "It's Conundrum! Everybody's favorite letters and numbers games! Try to build the longest word you can or hit the target number using arithmetic.",
    });
  }
}
