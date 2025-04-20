import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuotesService } from '../services/quotes.service';
import {
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-quote-img',
  templateUrl: './quote-img.page.html',
  styleUrls: ['./quote-img.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class QuoteImgPage implements OnInit {
  imageURL:string = ""

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotesService.getInspirationalImg().subscribe((data) => {
      console.log(data);
      this.imageURL = URL.createObjectURL(data);
    });
  }
}
