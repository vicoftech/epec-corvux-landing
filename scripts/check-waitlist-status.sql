-- Check current status of waitlist setup

-- Check if table exists and show structure
SELECT 
  'Table Structure' as info_type,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'waitlist'
ORDER BY ordinal_position;

-- Check existing policies
SELECT 
  'Security Policies' as info_type,
  policyname as name,
  cmd as command,
  permissive
FROM pg_policies 
WHERE tablename = 'waitlist';

-- Check if views and functions exist
SELECT 
  'Database Objects' as info_type,
  'waitlist_stats view' as object_name,
  CASE WHEN EXISTS (
    SELECT 1 FROM information_schema.views 
    WHERE table_name = 'waitlist_stats'
  ) THEN 'EXISTS' ELSE 'MISSING' END as status
UNION ALL
SELECT 
  'Database Objects' as info_type,
  'get_source_stats function' as object_name,
  CASE WHEN EXISTS (
    SELECT 1 FROM information_schema.routines 
    WHERE routine_name = 'get_source_stats'
  ) THEN 'EXISTS' ELSE 'MISSING' END as status;

-- Show current data
SELECT 
  'Current Data' as info_type,
  COUNT(*) as total_records,
  COUNT(DISTINCT first_source) as unique_sources,
  MAX(created_at) as latest_signup
FROM waitlist;
