import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { dietary, preferences, ingredients } = req.body;
    // const prompt = `Create a recipe that includes ${ingredients.join(', ')} for someone who prefers ${preferences.join(', ')} and follows a ${dietary.join(', ')} diet.`;

    const prompt = `Please provide a recipe format with the following sections clearly marked: [TITLE], [INGREDIENTS], [INSTRUCTIONS]. The recipe should create a balanced meal using available ingredients, particularly focusing on using both carbohydrates and proteins if they are listed: ${ingredients.join(', ')}. It should cater to the preferences ${preferences.join(', ')} and dietary restrictions ${dietary.join(', ')} of a Swedish individual. Ensure the meal is realistic and suitable, avoiding impractical combinations like a single ingredient dish when more diverse options are possible. The recipe should be returned in Swedish, keeping section titles in English.`;

    // const prompt = 'Answer with text "TEST" and nothing else'

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a recipe creator/chef. Always give realistic recipes. Nothing weird." },
                { role: "user", content: prompt }
            ],
        });

        res.status(200).json({ recipe: completion.choices[0].message.content });
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ error: 'Error creating recipe' });
    }
}
