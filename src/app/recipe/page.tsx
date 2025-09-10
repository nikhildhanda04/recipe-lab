"use client";

import { useState } from "react";
import Navbar from "../components/common/navbar";
// import Footer from "../components/landingPage/common/footer"
import Steps from "../components/recipe/Steps";

interface RecipeData {
  title: string;
  ingredients: string[];
  steps: string[];
}

export default function Recipe() {
  const [dishName, setDishName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [error, setError] = useState("");

  const handleCreateRecipe = async () => {
    if (!dishName.trim()) {
      setError("Please enter a dish name");
      return;
    }

    setIsCreating(true);
    setError("");

    try {
      const response = await fetch('/api/recipe/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: dishName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create recipe');
      }

      const newRecipe = await response.json();
      setRecipeData(newRecipe);
      
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsCreating(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleCreateRecipe();
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col items-center gap-16 py-36">
          <div className="flex flex-col items-center">
            <div className="font-primary items-center mx-auto font-bold tracking-tight text-center text-2xl md:text-7xl text-zinc-800 dark:text-zinc-400">
              Start your <span className="text-primary">cooking</span> journey <br/> that never ends.
            </div>
            {/* <div className="text-base font-secondary text-zinc-600">
              try one dish for free
            </div> */}
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <input
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a Dish"
                className="px-8 text-left py-5 border-2 font-secondary font-lg border-stone-500 rounded-xl shadow-[0px_4px_2px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_0px(0,0,0,0.0)] relative hover:top-1 transition-all duration-50 active:shadow-[0px_0px_0px(0,0,0,0.2)]"
                disabled={isCreating}
              />
              <button
                onClick={handleCreateRecipe}
                disabled={isCreating || !dishName.trim()}
                className="bg-primary p-5 rounded-xl font-primary border-2 font-bold text-light border-stone-500 hover:shadow-[0px_4px_2px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_0px(0,0,0,0.0)] hover:-top-1 relative active:top-1 transition-all duration-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:top-0 disabled:hover:shadow-none"
              >
                {isCreating ? "Creating..." : "Create"}
              </button>
            </div>
            
            {error && (
              <div className="text-red-500 font-secondary text-sm max-w-md text-center">
                {error}
              </div>
            )}
          </div>
        </div>
        
        {recipeData && (
          <div className="pb-20">
            <Steps 
              title={recipeData.title} 
              ingredients={recipeData.ingredients || []} 
              steps={recipeData.steps || []} 
            />
          </div>
        )}
      </div>
    </>
  );
}