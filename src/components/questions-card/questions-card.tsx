import { FC, useState } from "react"
import { Button, Group, Stepper } from "@mantine/core";
import classes from './questions-card.module.scss'
import IngredientsStep from "./ingredients-step/ingredients-step"
import DietaryStep from "./dietary-step/dietary-step";
import PreferencesStep from "./preferences-step/preferences-step";

const QuestionsCard: FC = () => {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div className={classes.QuestionsCardContainer}>
            <Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="First step" description="Dietary">
                    Step 1 content: <DietaryStep />
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Preferences">
                    Step 2 content: <PreferencesStep />
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Ingredients">
                    Step 3 content: <IngredientsStep />
                </Stepper.Step>
                <Stepper.Completed>
                    LOADER HERE THEN SWITCH TO RESULT PAGE COMPONENT
                </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </div>
    )
}

export default QuestionsCard