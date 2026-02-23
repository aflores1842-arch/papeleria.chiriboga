import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Si faltan las llaves, creamos un cliente "vacío" para que no dé el error 'is required'
// Pero te avisará en la consola qué está pasando.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ ERROR: No se encontraron las llaves en .env.local")
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder'
)