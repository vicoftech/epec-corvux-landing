-- Verificar que la tabla se creó correctamente
SELECT 
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'waitlist'
ORDER BY ordinal_position;

-- Verificar índices
SELECT 
  indexname,
  indexdef
FROM pg_indexes 
WHERE tablename = 'waitlist';

-- Verificar políticas de seguridad
SELECT 
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'waitlist';

-- Verificar triggers
SELECT 
  trigger_name,
  event_manipulation,
  action_timing,
  action_statement
FROM information_schema.triggers 
WHERE event_object_table = 'waitlist';

-- Probar la vista de estadísticas
SELECT * FROM waitlist_stats;

-- Probar la función de estadísticas por fuente
SELECT * FROM get_source_stats();

-- Mostrar algunos registros de ejemplo
SELECT 
  id,
  email,
  created_at,
  first_source,
  signup_count,
  status
FROM waitlist 
ORDER BY created_at DESC 
LIMIT 5;
