export interface SavedRecipe {
  id: number;
  created_at: string;
  user_id: number;
  title: string;
  ingredients: string;
  instructions: string;
}

export const fetchSupabaseRecipes = async ():  Promise<SavedRecipe[]> => {
  // Ensure environment variables are defined
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Supabase URL or ANON_KEY is undefined');
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/savedrecipes?apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
