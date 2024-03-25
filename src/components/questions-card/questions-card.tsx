import { FC, useState } from 'react'
import { Button, Group, Loader, Stepper } from '@mantine/core'
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
	const [isLoading, setIsLoading] = useState(false)
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current))
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current))

	const handleSubmit = () => {
		setIsLoading(true)
		const {
			dietary,
			preferences,
			ingredients,
		} = ValuesInputForm.values
		fetch('/api/recipePrompt', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				dietary,
				preferences,
				ingredients,
			}),
		})
			.then((response) => {
				setIsLoading(false)
				if (!response.ok) {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					})
					throw new Error('ERROR HERE')
				}
				return response.json()
			})
			.then((data) => {
				setIsLoading(false)
				console.log('Recipe generated:', data);
			})
	}

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
					{isLoading &&
						<Loader
							size='xl' 
							color='green'
							classNames={{
								root: classes.LoaderRoot,
							}}
						/>
					}
					{!isLoading && <h1>RESULTS COMPONENT HERE</h1>}
				</Stepper.Completed>
			</Stepper>
			{active < 3 &&
				<Group justify='center' mt='xl'>
					{active > 0 && <Button variant='default' onClick={prevStep}>Back</Button>}
					{active < 2 && <Button onClick={nextStep}>Next step</Button>}
					{active === 2 && <Button onClick={() => { nextStep(); handleSubmit(); }}>Submit</Button>}
				</Group>
			}
		</div>
	)
}

export default QuestionsCard
