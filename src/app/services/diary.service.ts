import { Injectable } from '@angular/core';
import { supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  constructor() {}

  //THIS CODE IS A SUPABASE API TO INTERACT WITH DATABASE
  async addLog(header: string, content: string) {
    const { data, error } = await supabase
      .from('Diary')
      .insert([{ header, content }])
      .select();
    console.log(data);
    if (error) console.log(error);
  }

  async deleteLog(id: number) {
    const { error } = await supabase.from('Diary').delete().eq('id', id);

    if (error) console.log(error);
  }

  //fetch all logs
  async getLogs() {
    let { data: Diary, error } = await supabase.from('Diary').select('*');
    console.log(Diary);
    if (error) console.log(error);
    return Diary;
  }

  async getLog(id: number) {
    const { data, error } = await supabase
      .from('Diary')
      .select('*')
      .eq('id', id);

    if (error) console.log(error);
    console.log(data);
    return data;
  }
}
