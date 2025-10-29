-- Create the missing waitlist_stats view and get_source_stats function
-- Based on the existing verify-waitlist-setup.sql structure

-- First, let's create the waitlist_stats view
CREATE OR REPLACE VIEW waitlist_stats AS
SELECT 
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '1 day') as leads_last_24h,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as leads_last_week,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as leads_last_month,
  COUNT(DISTINCT first_source) as unique_sources,
  COALESCE(
    (SELECT first_source 
     FROM waitlist 
     WHERE first_source IS NOT NULL 
     GROUP BY first_source 
     ORDER BY COUNT(*) DESC 
     LIMIT 1), 
    'direct'
  ) as top_source
FROM waitlist;

-- Create the get_source_stats function
CREATE OR REPLACE FUNCTION get_source_stats()
RETURNS TABLE (
  source TEXT,
  count BIGINT,
  percentage NUMERIC
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(w.first_source, 'direct') as source,
    COUNT(*) as count,
    ROUND((COUNT(*) * 100.0 / NULLIF((SELECT COUNT(*) FROM waitlist), 0)), 2) as percentage
  FROM waitlist w
  GROUP BY w.first_source
  ORDER BY count DESC;
END;
$$ LANGUAGE plpgsql;

-- Verify creation
SELECT 'Objects created successfully' as message;
