import { Button } from "@mantine/core";
import { FC, useState } from "react";
import classes from './recipe.module.scss'

interface RecipeProps {
    recipeData: {
        recipe: string
    }
}

const Recipe: FC<RecipeProps> = ({
    recipeData
}) => {
    const sections = recipeData.recipe.split(/\[TITLE\]|\[TITEL\]|\[INGREDIENTS\]|\[INGREDIENSER\]|\[INSTRUCTIONS\]|\[INSTRUKTIONER\]/).map(section => section.trim())

    const [showRecipeSection, setShowRecipeSection] = useState(false)

    const handleClick = () => {
        setShowRecipeSection(true)
    }

    return (
        <div className={classes.RecipeContainer}>
            <h2>Här är ditt recept</h2>
            <h1>{sections[1]}</h1>
            <p>Baserat på dina preferenser samt ingredienser har vi skapat ett recept till dig. Smaklig måltid!</p>
            <h3>​​Ingredienser</h3>
            <p>{sections[2]}</p>
            <Button onClick={handleClick}>Laga nu</Button>
            {showRecipeSection && <p>{sections[3]}</p>}
            <h3>Spara detta recept till dina favoriter eller fortsätt och generera om du inte än är nöjd.</h3>
            <div>
                <Button>Spara recept</Button>
                <Button>Skapa nytt recept</Button>
            </div>
        </div>
    )
}

export default Recipe