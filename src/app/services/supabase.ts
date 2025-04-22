import { createClient } from "@supabase/supabase-js";
import {environment} from '../../environments/environment'

//file which connects your project to the supabase
const supabaseUrl = environment.supabaseURL;
const supabaseKey = environment.supabaseAPI;
export const supabase = createClient(supabaseUrl, supabaseKey);

