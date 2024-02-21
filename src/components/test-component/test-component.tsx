import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSupabaseRecipes, SavedRecipe } from "@/services/fetchSupabaseRecipes";
import classes from './test-component.module.scss';

const TestComponent: FC = () => {
    const { data: recipes, isLoading, error } = useQuery<SavedRecipe[], Error>({
        queryKey: ['savedrecipes'],
        queryFn: fetchSupabaseRecipes
      });

    return (
        <div>
            <h1 className={classes.TestStyle}>I am a test component tihi</h1>
            {isLoading && <p>Loading recipes...</p>}
            {error instanceof Error && <p>Error loading recipes: {error.message}</p>}
            {recipes && (
                <ul>
                    {recipes?.map((recipe: SavedRecipe) => (
                        <li key={recipe.id}>{recipe.instructions}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TestComponent;
