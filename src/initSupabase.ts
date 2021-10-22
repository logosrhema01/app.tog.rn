import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

// Better put your these secret keys in .env file
export const supabase = createClient("https://cwozsbgiceysovabqgnn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDk0MDIyOCwiZXhwIjoxOTUwNTE2MjI4fQ.WtsuDb_oujxTTHN246KYe3FYhFyzsc3eaDEBrcAdbpQ", {
  localStorage: AsyncStorage as any,
})
