import { Injectable } from '@angular/core';
import { supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  constructor() {}

  //BASICALLY ALL THIS CODE IS FOR INTERACTING WITH DATABASE (SUPABASE) THIS CODE IS PROVIDED BY API SUPABASE DOCUMENTATION
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

  //fetch the log based on ID
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
