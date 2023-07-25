"use client";
import { Button } from "@/components/ui";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

function RecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
    getValues,
    setValue,
    reset,
  } = useForm();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [directions, setDirections] = useState<string[]>([]);

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/recipes", {
      title: data.title,
      description: data.description,
      ingredients,
      directions,
    });
    console.log(res);
    toast.success("Recipe created successfully");
    reset();
  });

  return (
    <form
      className="w-1/3 border-2 border-black rounded-md p-5"
      onSubmit={onSubmit}
    >
      <h3 className="text-2xl font-bold">Your Recipe</h3>

      <label htmlFor="title">Write the title of your recipe</label>
      <input
        type="text"
        placeholder="Title"
        {...register("title", { required: true })}
        className={
          "w-full border-2 border-black rounded-md p-2 " +
          (errors.title ? "border-red-500" : "")
        }
        autoFocus
      />

      <label htmlFor="description">Write a description of your recipe</label>
      <textarea
        {...register("description")}
        className="w-full border-2 border-black rounded-md p-2"
        rows={3}
      ></textarea>

      <label htmlFor="ingredients">Write the ingredients of your recipe</label>
      <input
        type="text"
        className="w-full border-2 border-black rounded-md p-2"
        {...register("ingredient")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setIngredients([...ingredients, getValues("ingredient")]);
            setValue("ingredient", "");
          }
        }}
      />

      {ingredients.length > 0 && (
        <ul className="bg-red-200 pl-7 mt-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc">
              {ingredient}
            </li>
          ))}
        </ul>
      )}

      <label htmlFor="directions">Write the directions of your recipe</label>
      <input
        type="text"
        name="directions"
        className="w-full border-2 border-black rounded-md p-2"
      />

      <label htmlFor="image">Upload an image</label>

      <input type="file" name="image" />
      <Button className="block my-2">
        {isLoading ? "Loading..." : "Create Recipe"}
      </Button>
    </form>
  );
}

export default RecipeForm;
