import axios from "axios";
import Recipe from "../../../../lib/model/recipeModel"; // Adjust path as needed
import connectDB from "../../../../lib/dbconnection";  

export async function POST(req) {
  try {

        await connectDB();
        
        const body = await req.json();
    const { title } = body;

    if (!title) {
      return new Response(JSON.stringify({ message: "Recipe title is required" }), { status: 400 });
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
      return new Response(JSON.stringify({ 
        message: "Failed to parse Gemini API response: " + geminiText 
      }), { status: 500 });
    }

    const newRecipe = await Recipe.create({
      title,
      ingredients: recipeData.ingredients,
      steps: recipeData.steps
    });

    return new Response(JSON.stringify(newRecipe), { status: 201 });

  } catch (error) {
    return new Response(JSON.stringify({ 
      message: "Gemini API error: " + error.message 
    }), { status: 500 });
  }
}