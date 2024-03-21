import { FC, useState } from 'react'
import { Button, Group, Stepper } from '@mantine/core'
import classes from './questions-card.module.scss'
import IngredientsStep from './ingredients-step/ingredients-step'
import DietaryStep from './dietary-step/dietary-step'
import PreferencesStep from './preferences-step/preferences-step'
import { useForm } from '@mantine/form'

export interface FormValues {
	ingredients: string[],
	dietary: string[],
	preferences: string[],
}

const QuestionsCard: FC = () => {
	const [active, setActive] = useState(0)
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current))
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current))

	const ValuesInputForm = useForm<FormValues>({
		validateInputOnBlur: true,
		initialValues: {
			ingredients: [],
			dietary: [],
			preferences: [],
		}
	})

	// TODO: REMOVE STEPPER STEPS WHEN RECIPE IS SHOWN

	return (
		<div className={classes.QuestionsCardContainer}>
			<Stepper
				active={active}
				onStepClick={setActive}
				allowNextStepsSelect={false}
				size="xs"
				color="yellow"
				classNames={{
					stepIcon: classes.StepIcon,
					separator: classes.Separator,
				}}
			>
				<Stepper.Step>
					<DietaryStep
						valuesInputForm={ValuesInputForm}
						errors={ValuesInputForm.errors}
					/>
				</Stepper.Step>
				<Stepper.Step>
					<PreferencesStep
						valuesInputForm={ValuesInputForm}
						errors={ValuesInputForm.errors}
					/>
				</Stepper.Step>
				<Stepper.Step>
					<IngredientsStep
						valuesInputForm={ValuesInputForm}
						errors={ValuesInputForm.errors}
					/>
				</Stepper.Step>
				<Stepper.Completed>
					LOADER HERE THEN SWITCH TO RESULT PAGE COMPONENT DISPLAYED HERE AS WELL.
				</Stepper.Completed>
			</Stepper>
			{active < 3 &&
				<Group justify='center' mt='xl'>
					{active !== 0 &&
						<Button variant='default' onClick={prevStep}>
							Back
						</Button>
					}
					<Button onClick={nextStep}>Next step</Button>
				</Group>
			}
		</div>
	)
}

export default QuestionsCard
