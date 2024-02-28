import { FC } from "react"
import classes from './ingredients-step.module.scss'

const IngredientsStep: FC = () => {
    return (
        <div className={classes.IngredientsStepContainer}>
            <div>STEPS 1-2-3</div>
            <div>
                <h1>TITLE</h1>
                <p>TEXT BELOW HEHEHEH</p>
            </div>
            <div>
                <div>SEARCHBAR</div>
                <div>SUGGESTIONS DOWN HERE</div>
            </div>
        </div>
    )
}

export default IngredientsStep