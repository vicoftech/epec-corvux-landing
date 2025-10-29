-- Debug and fix the waitlist_stats issue step by step

-- Step 1: Check if the view exists
SELECT 
  CASE 
    WHEN EXISTS (
      SELECT 1 FROM information_schema.views 
      WHERE table_name = 'waitlist_stats'
    ) 
    THEN 'waitlist_stats view EXISTS' 
    ELSE 'waitlist_stats view DOES NOT EXIST' 
  END as view_status;

-- Step 2: Drop the view if it exists (to start fresh)
DROP VIEW IF EXISTS waitlist_stats;

-- Step 3: Create a simple version of the view
CREATE VIEW waitlist_stats AS
SELECT 
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '1 day') as leads_last_24h,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as leads_last_week,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as leads_last_month
FROM waitlist;

-- Step 4: Immediately test if the view was created
SELECT 'View creation test:' as test;
SELECT * FROM waitlist_stats;

-- Step 5: Create the function
DROP FUNCTION IF EXISTS get_source_stats();
CREATE FUNCTION get_source_stats()
RETURNS TABLE (
  source TEXT,
  count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(w.first_source, 'direct') as source,
    COUNT(*) as count
  FROM waitlist w
  GROUP BY w.first_source
  ORDER BY count DESC;
END;
$$ LANGUAGE plpgsql;

-- Step 6: Test the function
SELECT 'Function test:' as test;
SELECT * FROM get_source_stats();
