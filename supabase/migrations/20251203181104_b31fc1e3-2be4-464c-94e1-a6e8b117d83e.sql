-- Create table for applications
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  course TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anyone can apply)
CREATE POLICY "Anyone can insert applications" 
ON public.applications 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading (only admins - for now allow service role)
CREATE POLICY "Service role can read applications"
ON public.applications
FOR SELECT
USING (false);