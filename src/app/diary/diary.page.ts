import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Toast } from '@capacitor/toast';
import {
  IonModal,
  IonItem,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonCard,
  IonTextarea,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
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
    IonItem,
    IonInput,
    IonTextarea,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
  ],
})
export class DiaryPage implements OnInit {
  //these are modal references by using them u can interact with the modal element in html
  @ViewChild('addModal') addModal!: IonModal;
  @ViewChild('viewModal') viewModal!: IonModal;
  diary: any[] = [];
  isViewModalOpen = false;
  title: string = '';
  content: string = '';
  constructor(private diaryService: DiaryService) {}
  selectedLog: any = null;
  //just fetch all logs from database on loading page
  async ngOnInit() {
    this.diary = (await this.diaryService.getLogs()) || [];
  }

  //wrapper function, additional functionality, not just interacting with API
  async onPressAddButton(title: string, content: string) {
    if (title === '' || content === '') return;

    await this.diaryService.addLog(title, content);
    this.diary = (await this.diaryService.getLogs()) || [];
    this.closeAddModal();
    await this.showToast("You've created new log!");
  }

  async onPressDeleteButton(id: number) {
    await this.diaryService.deleteLog(id);
    this.diary = (await this.diaryService.getLogs()) || [];
    this.closeViewModal();
    await this.showToast("You've deleted your log");
  }

  closeAddModal() {
    this.addModal.dismiss(null, 'closeAddModal');
    this.title = '';
    this.content = '';
  }

  closeViewModal() {
    this.viewModal.dismiss(null, 'closeViewModal');
    this.selectedLog = null;
    this.isViewModalOpen = false;
  }

  setSelectedLog(log: any) {
    this.selectedLog = log;
    this.isViewModalOpen = true;
  }

  async showToast(message: string) {
    await Toast.show({
      text: message,
      duration: 'short',
      position: 'top',
    });
  }
}
