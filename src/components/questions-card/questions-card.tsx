import { FC } from "react"
import classes from './questions-card.module.scss'
import IngredientsStep from "./ingredients-step/ingredients-step"

const QuestionsCard: FC = () => {
    return (
        <div className={classes.QuestionsCardContainer}>
            <IngredientsStep />
        </div>
    )
}

export default QuestionsCard