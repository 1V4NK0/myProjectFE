import { createClient } from '@supabase/supabase-js';
// import { environment } from '../../environments/environment';

//file which sets up the connection to the supabase basically
// const supabaseUrl = environment.supabaseURL;
const supabaseUrl = 'https://vzuvjpbedytwcinhahbv.supabase.co';
// const supabaseKey = environment.supabaseAPI;
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6dXZqcGJlZHl0d2NpbmhhaGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzY4NjgsImV4cCI6MjA2MDgxMjg2OH0.O07qfNNSh7A9qSEljUg7Lj8rmWXVjz38r2qPgn7yAVc';

export const supabase = createClient(supabaseUrl, supabaseKey);
