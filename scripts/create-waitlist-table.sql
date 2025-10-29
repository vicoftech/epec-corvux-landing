-- Crear la tabla de waitlist
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  first_source TEXT,
  last_source TEXT,
  user_agent TEXT,
  ip_address TEXT,
  signup_count INTEGER DEFAULT 1,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Crear índices para búsquedas rápidas
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at);
CREATE INDEX IF NOT EXISTS waitlist_status_idx ON waitlist (status);
CREATE INDEX IF NOT EXISTS waitlist_first_source_idx ON waitlist (first_source);

-- Crear políticas de seguridad (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Permitir inserción desde el servidor (usando service role key)
CREATE POLICY "Allow service role to manage waitlist" ON waitlist
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Permitir inserción anónima solo para crear nuevos registros
CREATE POLICY "Allow anonymous inserts to waitlist" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Permitir lectura solo a usuarios autenticados (para el panel admin)
CREATE POLICY "Allow authenticated users to read waitlist" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');

-- Crear función para actualizar el timestamp automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear trigger para actualizar el timestamp automáticamente
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON waitlist;
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insertar algunos datos de ejemplo (opcional - puedes comentar esta sección)
INSERT INTO waitlist (email, first_source, last_source, user_agent, ip_address) VALUES
  ('test@example.com', 'hero-section', 'hero-section', 'Mozilla/5.0 Test Browser', '192.168.1.1'),
  ('demo@corvux.com', 'faq-section', 'faq-section', 'Mozilla/5.0 Demo Browser', '192.168.1.2')
ON CONFLICT (email) DO NOTHING;

-- Crear vista para estadísticas rápidas
CREATE OR REPLACE VIEW waitlist_stats AS
SELECT 
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '1 day') as leads_last_24h,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as leads_last_week,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as leads_last_month,
  COUNT(DISTINCT first_source) as unique_sources,
  mode() WITHIN GROUP (ORDER BY first_source) as top_source
FROM waitlist;

-- Crear función para obtener estadísticas por fuente
CREATE OR REPLACE FUNCTION get_source_stats()
RETURNS TABLE (
  source TEXT,
  count BIGINT,
  percentage NUMERIC
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(w.first_source, 'unknown') as source,
    COUNT(*) as count,
    ROUND((COUNT(*) * 100.0 / (SELECT COUNT(*) FROM waitlist)), 2) as percentage
  FROM waitlist w
  GROUP BY w.first_source
  ORDER BY count DESC;
END;
$$ LANGUAGE plpgsql;

-- Comentarios para documentar la estructura
COMMENT ON TABLE waitlist IS 'Tabla para almacenar leads de la lista de espera';
COMMENT ON COLUMN waitlist.email IS 'Email del usuario (único)';
COMMENT ON COLUMN waitlist.first_source IS 'Primera fuente de donde vino el usuario';
COMMENT ON COLUMN waitlist.last_source IS 'Última fuente registrada';
COMMENT ON COLUMN waitlist.signup_count IS 'Número de veces que se ha registrado';
COMMENT ON COLUMN waitlist.status IS 'Estado del lead: pending, contacted, converted, etc.';
COMMENT ON COLUMN waitlist.metadata IS 'Datos adicionales en formato JSON';
