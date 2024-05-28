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

    const prompt = `Skapa ett recept som inkluderar följande ingredienser: ${ingredients.join(', ') || "valfria ingredienser"}. Rätten ska passa de önskemål och kostrestriktioner som anges: ${preferences.join(', ') || "inget specifikt önskemål"}, ${dietary.join(', ') || "inge specifik diet"}. Receptet ska ha tydliga avsnitt för [TITEL], [INGREDIENSER], och [INSTRUKTIONER], där [TITEL] ska vara kreativ och aptitretande. Allt ska presenteras på svenska med avsnittstitlar på engelska.`;

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
