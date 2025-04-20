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

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.page.html',
  styleUrls: ['./random-quote.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class RandomQuotePage implements OnInit {
  author: string = '';
  quote: string = '';
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotesService.getRandomQuote().subscribe((data) => {
      console.log(data[0]);
      this.author = data[0].a;
      this.quote = data[0].q;
    });
  }

  onPressNewQuote() {
    this.quotesService.getRandomQuote().subscribe((data) => {
      this.author = data[0].a;
      this.quote = data[0].q;
    });
  }
}
