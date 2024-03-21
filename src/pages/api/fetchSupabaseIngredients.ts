import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if environment variables are set
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return res.status(500).json({ error: 'Supabase URL or Service Role Key is undefined.' });
    }

    // Creating the Supabase client for server-side
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Proceed with your Supabase request
    const { data, error } = await supabase.from('ingredients').select('*');

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    return res.status(200).json(data);
}
