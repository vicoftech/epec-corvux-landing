import { createClient } from "@supabase/supabase-js"

// Creamos un singleton para el cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Cliente para el lado del servidor
export const createServerSupabaseClient = () => {
  return createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || "")
}

// Cliente para el lado del cliente (con permisos limitados)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
