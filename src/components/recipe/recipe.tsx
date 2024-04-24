import { Button } from "@mantine/core";
import { FC, useState } from "react";
import classes from './recipe.module.scss'
import Image from "next/image";
import ButtonBasic from "../button/button";
import { FaRegHeart } from "react-icons/fa6";

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

    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid lightgray'
    }

    return (
        <div className={classes.RecipeContainer}>
            <div className={classes.TopSection}>
                <div>
                    <p>Här är ditt recept</p>
                    <p>{sections[1]}</p>
                    <p>Baserat på dina preferenser samt ingredienser har vi skapat ett recept till dig. Smaklig måltid!</p>
                </div>
                <div>
                    <Image
                        alt='cookingillustration'
                        src='/cookingIllustration.png'
                        height={300}
                        width={300}
                        style={imageStyle}
                    />
                </div>
            </div>
            <div className={classes.IngredientsSection}>
                <div>
                    <h3>​​Ingredienser</h3>
                    <p>{sections[2]}</p>
                </div>
                <div>
                    <ButtonBasic
                        onClick={handleClick}
                        text="Laga nu"
                        rightSection={null}
                    />
                </div>
            </div>
            {showRecipeSection &&
                <div>
                    <p>{sections[3]}</p>
                </div>
            }
            <div className={classes.BottomSection}>
                <div>
                    <h3>Spara detta recept till dina favoriter eller fortsätt och generera om du inte än är nöjd.</h3>
                </div>
                <div className={classes.ButtonsWrapper}>
                    <div>
                        <ButtonBasic
                            onClick={() => { }}
                            text="Spara recept"
                            rightSection={<FaRegHeart size={20}/>}
                        />
                    </div>
                    <div>
                        <Button
                            classNames={{
                                root: classes.ButtonRoot,
                                label: classes.ButtonInner,
                            }}
                        >Skapa nytt recept
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe