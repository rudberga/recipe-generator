import { FC } from "react";

interface RecipeProps {
    recipeData: {
        recipe: string 
    } 
}

const Recipe: FC<RecipeProps> = ({
recipeData
}) => {
    return (
       <div>{recipeData.recipe}</div>
    )
}

export default Recipe