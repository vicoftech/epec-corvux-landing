-- This script creates the demo_requests table if it does not already exist.
-- It includes columns for full_name, email, company, role_title, industry, message, and creation timestamp.

CREATE TABLE IF NOT EXISTS public.demo_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    role_title VARCHAR(255),
    company_size VARCHAR(50),
    industry VARCHAR(255),
    country VARCHAR(255),
    phone_number VARCHAR(20),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add missing columns if they don't exist (idempotent)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='full_name') THEN
        ALTER TABLE public.demo_requests ADD COLUMN full_name VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='email') THEN
        ALTER TABLE public.demo_requests ADD COLUMN email VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='company') THEN
        ALTER TABLE public.demo_requests ADD COLUMN company VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='role_title') THEN
        ALTER TABLE public.demo_requests ADD COLUMN role_title VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='company_size') THEN
        ALTER TABLE public.demo_requests ADD COLUMN company_size VARCHAR(50);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='industry') THEN
        ALTER TABLE public.demo_requests ADD COLUMN industry VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='country') THEN
        ALTER TABLE public.demo_requests ADD COLUMN country VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='phone_number') THEN
        ALTER TABLE public.demo_requests ADD COLUMN phone_number VARCHAR(20);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='message') THEN
        ALTER TABLE public.demo_requests ADD COLUMN message TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='demo_requests' AND column_name='created_at') THEN
        ALTER TABLE public.demo_requests ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
    END IF;
END
$$;
