import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Toast } from '@capacitor/toast';
import {
  IonModal,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';
import { DiaryService } from '../services/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
  ],
})
export class DiaryPage implements OnInit {
  diary: any[] = [];
  constructor(private diaryService: DiaryService) {}

  async ngOnInit() {
    this.diary = (await this.diaryService.getLogs()) || [];
  }

  //THEY WORK JUST FIGURE OUT HOW TO PASS DATA INTO FUNCTIONS
  async onPressAddButton() {
    this.diaryService.addLog('22/04', 'today was a good day');
    //refresh diary page by getting logs again
    this.diary = (await this.diaryService.getLogs()) || [];
  }

  async onPressDeleteButton() {
    this.diaryService.deleteLog('22/04');
    this.diary = (await this.diaryService.getLogs()) || [];
  }
}
