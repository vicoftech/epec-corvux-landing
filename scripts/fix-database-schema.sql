-- Fix the demo_requests table
ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS current_challenges TEXT;

-- Fix the investor_requests table - add missing columns
ALTER TABLE investor_requests ADD COLUMN IF NOT EXISTS organization VARCHAR(255);
ALTER TABLE investor_requests ADD COLUMN IF NOT EXISTS ticket_size VARCHAR(100);

-- Update any existing records that might have null values
UPDATE demo_requests SET current_challenges = '' WHERE current_challenges IS NULL;
UPDATE investor_requests SET organization = '' WHERE organization IS NULL;
UPDATE investor_requests SET ticket_size = '' WHERE ticket_size IS NULL;

-- Verify the changes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'demo_requests' 
ORDER BY ordinal_position;

SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'investor_requests' 
ORDER BY ordinal_position;
