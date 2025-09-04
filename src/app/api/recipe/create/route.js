
import axios from "axios";
import Recipe from "../../../../lib/model/recipeModel"; // Adjust path as needed

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { title } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: "Recipe title is required" });
    }

    const prompt = `Generate a JSON object with two keys: "ingredients" (an array of ingredient strings) and "steps" (an array of step strings) for a recipe titled "${title}".`;
    
    const geminiRes = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
      {
        contents: [{ parts: [{ text: prompt }] }]
      }
    );

    let geminiText = geminiRes.data.candidates[0].content.parts[0].text;
    geminiText = geminiText.replace(/```json|```/g, '').trim();

    let recipeData;
    try {
      recipeData = JSON.parse(geminiText);
    } catch {
      return res.status(500).json({ 
        message: "Failed to parse Gemini API response: " + geminiText 
      });
    }

    const newRecipe = await Recipe.create({
      title,
      ingredients: recipeData.ingredients,
      steps: recipeData.steps
    });

    res.status(201).json(newRecipe);

  } catch (error) {
    res.status(500).json({ 
      message: "Gemini API error: " + error.message 
    });
  }
}