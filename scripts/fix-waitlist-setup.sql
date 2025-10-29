-- Fix missing waitlist_stats view and handle existing policies gracefully

-- Drop and recreate the waitlist_stats view to ensure it exists
DROP VIEW IF EXISTS waitlist_stats;
CREATE VIEW waitlist_stats AS
SELECT 
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '1 day') as leads_last_24h,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as leads_last_week,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as leads_last_month,
  COUNT(DISTINCT first_source) as unique_sources,
  mode() WITHIN GROUP (ORDER BY first_source) as top_source
FROM waitlist;

-- Recreate the source stats function if it doesn't exist
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

-- Verify the setup is working
SELECT 'Waitlist table exists' as status, COUNT(*) as record_count FROM waitlist;
SELECT 'Waitlist stats view created' as status FROM waitlist_stats LIMIT 1;
SELECT 'Source stats function working' as status FROM get_source_stats() LIMIT 1;
