import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

//file which sets up the connection to the supabase basically
const supabaseUrl = environment.supabaseURL;
const supabaseKey = environment.supabaseAPI;
export const supabase = createClient(supabaseUrl, supabaseKey);
