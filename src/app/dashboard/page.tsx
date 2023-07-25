import RecipeCard from "@/components/RecipeCard";
import { prisma } from "@/libs/prisma";

async function loadRecipes() {
  const recipes = await prisma.recipe.findMany();
  return recipes;
}

async function DashboardPage() {
  const recipies = await loadRecipes();
  return (
    <div>
      <h1>dashboard page</h1>

      <section className="grid grid-cols-4 gap-2">
        {recipies.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
}

export default DashboardPage;
