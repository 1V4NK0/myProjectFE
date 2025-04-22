import { Injectable } from '@angular/core';
import { supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  constructor() {}

  async addLog(header: string, content: string) {
    const { data, error } = await supabase
      .from('Diary')
      .insert([{ header, content }])
      .select();
    console.log(data);
    if (error) console.log(error);
  }


  //change this to id somehow instead of header
  async deleteLog(header: string) {
    const { error } = await supabase
      .from('Diary')
      .delete()
      .eq('header', header);

    if (error) console.log(error);
  }

  async getLogs() {
    let { data: Diary, error } = await supabase.from('Diary').select('*');
    console.log(Diary);
    if (error) console.log(error);
    return Diary;
  }
}
