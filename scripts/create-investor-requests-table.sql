-- This script creates the investor_requests table if it does not already exist.
-- It includes columns for full_name, email, organization, role_title, investment focus, typical_ticket_size, additional_information, and creation timestamp.

CREATE TABLE IF NOT EXISTS public.investor_requests (
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

-- Add missing columns if they don't exist (idempotent)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='full_name') THEN
        ALTER TABLE public.investor_requests ADD COLUMN full_name VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='email') THEN
        ALTER TABLE public.investor_requests ADD COLUMN email VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='organization') THEN
        ALTER TABLE public.investor_requests ADD COLUMN organization VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='role_title') THEN
        ALTER TABLE public.investor_requests ADD COLUMN role_title VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='investment_focus') THEN
        ALTER TABLE public.investor_requests ADD COLUMN investment_focus VARCHAR(255);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='typical_ticket_size') THEN
        ALTER TABLE public.investor_requests ADD COLUMN typical_ticket_size VARCHAR(50);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='additional_information') THEN
        ALTER TABLE public.investor_requests ADD COLUMN additional_information TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='investor_requests' AND column_name='created_at') THEN
        ALTER TABLE public.investor_requests ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
    END IF;
END
$$;
