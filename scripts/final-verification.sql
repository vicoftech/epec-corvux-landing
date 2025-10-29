-- Final verification that everything is working
SELECT 
  'Waitlist Setup Complete' as status,
  (SELECT total_leads FROM waitlist_stats) as total_signups,
  (SELECT top_source FROM waitlist_stats) as primary_source;

-- Show current waitlist data
SELECT 
  email,
  created_at,
  first_source,
  status
FROM waitlist 
ORDER BY created_at DESC;

-- Show source breakdown
SELECT * FROM get_source_stats();
