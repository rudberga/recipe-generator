import { Button } from "@mantine/core";
import { FC } from "react";

interface RecipeProps {
    recipeData: {
        recipe: string
    }
}

const Recipe: FC<RecipeProps> = ({
    recipeData
}) => {
    const sections = recipeData.recipe.split(/\[TITLE\]|\[INGREDIENTS\]|\[INSTRUCTIONS\]/).map(section => section.trim())

    return (
        <div className="classes.RecipeContainer">
            <h2>Här är ditt recept</h2>
            <h1>{sections[1]}</h1>
            <p>Baserat på dina preferenser samt ingredienser har vi skapat ett recept till dig. Smaklig måltid!</p>
            <h3>​​Ingredienser</h3>
            <p>{sections[2]}</p>
            <Button>Laga nu</Button>
            <h3>Spara detta recept till dina favoriter eller fortsätt och generera om du inte än är nöjd.</h3>
            {/* <p>{sections[3]}</p> */}
            <div>
                <Button>Spara recept</Button>
                <Button>Skapa nytt recept</Button>
            </div>
        </div>
    )
}

export default Recipe