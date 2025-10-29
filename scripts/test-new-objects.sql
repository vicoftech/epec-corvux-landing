-- Test that the new objects work correctly

-- Test the waitlist_stats view
SELECT 'Testing waitlist_stats view:' as test;
SELECT * FROM waitlist_stats;

-- Test the get_source_stats function
SELECT 'Testing get_source_stats function:' as test;
SELECT * FROM get_source_stats();

-- Show current waitlist data
SELECT 'Current waitlist entries:' as test;
SELECT 
  id,
  email,
  created_at,
  first_source,
  signup_count,
  status
FROM waitlist 
ORDER BY created_at DESC;
