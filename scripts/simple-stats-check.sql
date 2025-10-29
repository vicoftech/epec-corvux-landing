-- Simple check without using the problematic view

-- Direct query instead of using view
SELECT 
  'Direct Stats Query' as info,
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '1 day') as leads_last_24h,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as leads_last_week,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as leads_last_month
FROM waitlist;

-- Source breakdown
SELECT 
  'Source Breakdown' as info,
  COALESCE(first_source, 'direct') as source,
  COUNT(*) as count
FROM waitlist 
GROUP BY first_source
ORDER BY count DESC;

-- Recent signups
SELECT 
  'Recent Signups' as info,
  email,
  created_at,
  first_source
FROM waitlist 
ORDER BY created_at DESC 
LIMIT 5;
