import RecipeCard from "@/components/RecipeCard";
import RecipeForm from "@/components/recipe/RecipeForm";

function RecipesPage() {
  return (
    <section className="flex gap-x-2">
      <RecipeForm />

      <div className="w-2/3">
        <header>
          <input type="text" placeholder="Search" className="w-full" />
        </header>
        <div className="grid grid-cols-3 gap-2">
          {/* <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard /> */}
        </div>
      </div>
    </section>
  );
}

export default RecipesPage;
