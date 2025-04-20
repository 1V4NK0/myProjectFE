import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonBackButton,IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.page.html',
  styleUrls: ['./random-quote.page.scss'],
  standalone: true,
  imports: [IonBackButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RandomQuotePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
