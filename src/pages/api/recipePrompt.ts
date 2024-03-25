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

    // const prompt = `Skapa ett recept som inkluderar ${ingredients.join(', ')}. Personen föredrar ${preferences.join(', ')} och följer en ${dietary.join(', ')} kost. Notera att inte alla ingredienser behöver användas, men se till att använda tillräckligt för att skapa ett realistiskt och gott recept. Inkludera en notering om ingredienser som inte ingår, som salt, peppar och olja, bör tilläggas efter eget omdöme.`;

    const prompt = 'Answer with text "TEST" and nothing else'

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a creative recipe creator/chef." },
                { role: "user", content: prompt }
            ],
        });

        res.status(200).json({ recipe: completion.choices[0].message.content });
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ error: 'Error creating recipe' });
    }
}
