import { Recipe } from "@prisma/client";

interface Props {
  recipe: Recipe;
}

function RecipeCard({ recipe }: Props) {
  return (
    <div className="bg-slate-200">
      <h3 className="text-xs font-bold">{recipe.title}</h3>
      <img
        src="https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg"
        alt=""
        className="w-72 h-72"
      />
    </div>
  );
}

export default RecipeCard;
