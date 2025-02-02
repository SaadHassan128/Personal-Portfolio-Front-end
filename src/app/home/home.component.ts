import { Component, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('1s ease-in')]),
      transition('visible => hidden', [animate('1s ease-out')]),
    ]),
  ],
})
export class HomeComponent {
  sentence: string = '';
  fadeState: string = 'hidden';
  texts: string[] = [
    'A Full Stack Software Developer',
    'Specialized in MEAN Stack',
    'An Instructor in Web Development',
  ];
  textIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.animated_text();
  }

  async animated_text() {
    for (let i = 0; i < this.texts.length; i++) {
      this.sentence = this.texts[i];
      this.fadeState = 'visible';
      this.cdr.detectChanges();
      await this.delay(1500);

      // ✅ Only hide text if it's NOT the last one
      if (i < this.texts.length - 1) {
        this.fadeState = 'hidden';
        this.cdr.detectChanges();
        await this.delay(1000);
      }
    }
    // ✅ Ensures last sentence remains visible
    this.fadeState = 'visible';
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
