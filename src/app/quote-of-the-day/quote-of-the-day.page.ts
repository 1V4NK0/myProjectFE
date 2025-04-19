import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quote-of-the-day',
  templateUrl: './quote-of-the-day.page.html',
  styleUrls: ['./quote-of-the-day.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuoteOfTheDayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
