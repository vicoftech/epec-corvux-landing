-- This script ensures all necessary tables and columns are present for the application.

-- Create demo_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS demo_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    role_title VARCHAR(255),
    company_size VARCHAR(50),
    industry VARCHAR(255),
    country VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure all columns are present in demo_requests
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'full_name') THEN
        ALTER TABLE demo_requests ADD COLUMN full_name VARCHAR(255) NOT NULL DEFAULT 'N/A';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'email') THEN
        ALTER TABLE demo_requests ADD COLUMN email VARCHAR(255) NOT NULL DEFAULT 'N/A';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'company') THEN
        ALTER TABLE demo_requests ADD COLUMN company VARCHAR(255) NOT NULL DEFAULT 'N/A';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'role_title') THEN
        ALTER TABLE demo_requests ADD COLUMN role_title VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'company_size') THEN
        ALTER TABLE demo_requests ADD COLUMN company_size VARCHAR(50);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'industry') THEN
        ALTER TABLE demo_requests ADD COLUMN industry VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'country') THEN
        ALTER TABLE demo_requests ADD COLUMN country VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'message') THEN
        ALTER TABLE demo_requests ADD COLUMN message TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'demo_requests' AND column_name = 'created_at') THEN
        ALTER TABLE demo_requests ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
    END IF;
END $$;

-- Create investor_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS investor_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    role_title VARCHAR(255),
    investment_focus VARCHAR(255),
    typical_ticket_size VARCHAR(50),
    additional_information TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure all columns are present in investor_requests
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'full_name') THEN
        ALTER TABLE investor_requests ADD COLUMN full_name VARCHAR(255) NOT NULL DEFAULT 'N/A';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'email') THEN
        ALTER TABLE investor_requests ADD COLUMN email VARCHAR(255) NOT NULL DEFAULT 'N/A';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'organization') THEN
        ALTER TABLE investor_requests ADD COLUMN organization VARCHAR(255) NOT NULL DEFAULT 'N/A';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'role_title') THEN
        ALTER TABLE investor_requests ADD COLUMN role_title VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'investment_focus') THEN
        ALTER TABLE investor_requests ADD COLUMN investment_focus VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'typical_ticket_size') THEN
        ALTER TABLE investor_requests ADD COLUMN typical_ticket_size VARCHAR(50);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'additional_information') THEN
        ALTER TABLE investor_requests ADD COLUMN additional_information TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'investor_requests' AND column_name = 'created_at') THEN
        ALTER TABLE investor_requests ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
    END IF;
END $$;

-- You can add more schema fixes or migrations here as needed.
-- For example, adding indexes, constraints, or modifying existing columns.
