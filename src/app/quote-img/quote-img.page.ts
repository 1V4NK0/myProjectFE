import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Toast } from '@capacitor/toast';
import { RouterLink } from '@angular/router';
import { QuotesService } from '../services/quotes.service';
import {
  IonButton,
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonSpinner
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-quote-img',
  templateUrl: './quote-img.page.html',
  styleUrls: ['./quote-img.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonButton,
    IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLoading,
    IonSpinner,
    RouterLink
  ],
})
export class QuoteImgPage implements OnInit {
  imageURL: string = '';
  loading: boolean = false;
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    console.log(this.imageURL);
    this.loading = true;
    this.quotesService.getInspirationalImg().subscribe((data) => {
      console.log(data);
      this.imageURL = URL.createObjectURL(data);
      this.loading = false;
    });
  }

  async onPressChangeImg() {
   
    try {
      this.loading = true;
      this.quotesService.getInspirationalImg().subscribe((data) => {
        this.imageURL = URL.createObjectURL(data);
        this.loading = false;
      });
      // await Toast.show({
      //   text: "You've changed the image",
      //   duration: 'short',
      // });
    } catch (err) {
      console.log(err);
      // await Toast.show({
      //   text: 'Failed to change image',
      //   duration: 'short',
      // });
      this.loading = false;
    }
  }

  onPressSaveImg() {
    if (this.imageURL) {
      fetch(this.imageURL)
        .then((res) => res.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(
            new Blob([blob], { type: 'image/jpeg' })
          );
          const link = document.createElement('a');
          link.href = url;
          link.download = 'inspirational-quote.jpeg';
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);
          link.remove();
        });
    }
  }
}
