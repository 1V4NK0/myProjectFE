import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuotesService } from '../services/quotes.service';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quote-of-the-day',
  templateUrl: './quote-of-the-day.page.html',
  styleUrls: ['./quote-of-the-day.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule,
    RouterLink
  ],
})
export class QuoteOfTheDayPage implements OnInit {
  constructor(private quotesService: QuotesService) {}
  quoteObj: any = {};
  author: string = '';
  quote: string = '';

  ngOnInit() {
    this.quotesService.getQuoteOfTheDay().subscribe((data) => {
      console.log(data[0]);
      this.quoteObj = data[0];
      this.author = data[0].a;
      this.quote = data[0].q;
    });
  }
}
