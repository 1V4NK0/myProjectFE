import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuotesService } from '../services/quotes.service';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

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
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
})
export class QuoteOfTheDayPage implements OnInit {
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotesService.getQuoteOfTheDay().subscribe((data) => {
      console.log(data);
    });
  }
}
