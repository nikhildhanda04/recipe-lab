interface StepsProps {
  title: string;
  ingredients: string[];
  steps: string[];
}

export default function Steps({ title, ingredients, steps }: StepsProps) {
  return (
    <>
      <div className="flex flex-col px-36 tracking-tight gap-12">
        <div className="font-primary font-bold text-6xl uppercase">
          {title}
        </div>
        <div className="font-primary font-medium text-4xl text-zinc-800">
          Ingredients:
        </div>
        <div className="grid grid-cols-3 font-secondary text-xl gap-y-5">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </div>
        <div className="font-primary font-medium text-4xl text-zinc-800">
          Recipe:
        </div>
        <div className="font-primary text-xl flex flex-col">
          {steps.map((step, index) => (
            <span key={index} className="mt-2">
              {index + 1}. {step}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

