import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonBackButton,IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  standalone: true,
  imports: [IonBackButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DiaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
