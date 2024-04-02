import { FC, useEffect, useState } from 'react'
import { Button, Group, Loader, Stepper } from '@mantine/core'
import classes from './questions-card.module.scss'
import IngredientsStep from './ingredients-step/ingredients-step'
import DietaryStep from './dietary-step/dietary-step'
import PreferencesStep from './preferences-step/preferences-step'
import { useForm } from '@mantine/form'
import Recipe from '../recipe/recipe'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import classNames from 'classnames'

export interface FormValues {
	ingredients: string[],
	dietary: string[],
	preferences: string[],
}

interface QuestionsCardProps {
	onStepChange: (activeStep: number) => void;
}

const QuestionsCard: FC<QuestionsCardProps> = ({
	onStepChange
}) => {
	const [active, setActive] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const [recipeData, setRecipeData] = useState(null)
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current))
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current))

	useEffect(() => {
		if (!isLoading) {
			onStepChange(active);
		}
	}, [active, isLoading, onStepChange]);


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
				console.log('Recipe generated:', data)
				setRecipeData(data)
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

	const QuestionsCardContainerClasses = classNames({
		[classes.QuestionsCardContainer]: true,
		[classes.ResultStepCard]: active === 3 && !isLoading,
	})

	return (
		<div className={QuestionsCardContainerClasses}>
			<Stepper
				active={active}
				onStepClick={setActive}
				allowNextStepsSelect={false}
				size="xs"
				color="#FFB800"
				classNames={{
					steps: active === 3 && !isLoading ? classes.Steps : '',
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
					{!isLoading && recipeData && <Recipe recipeData={recipeData} />}
				</Stepper.Completed>
			</Stepper>
			{active < 3 &&
				// <div className={classes.ButtonsContainer}>
				<Group justify='space-between' mt='xl'>
					{active > 0 &&
						<Button
							onClick={prevStep}
							variant='outline'
							color="#2F2F2F"
							size="md"
							radius="md"
							leftSection={<FaLongArrowAltLeft />}
						// classNames={{
						// 	root: classes.ButtonRoot,
						// }}
						>
							Gå tillbaka
						</Button>
					}
					<div></div>
					{active < 2 &&
						<Button
							onClick={nextStep}
							variant="filled"
							color="#5ECE68"
							size="md"
							radius="md">
							Nästa
						</Button>
					}
					{active === 2 &&
						<Button
							onClick={() => { nextStep(); handleSubmit(); }} variant="filled"
							color="#5ECE68"
							size="md"
							radius="md">
							Slutför
						</Button>
					}
				</Group>
				// </div>
			}
		</div>
	)
}

export default QuestionsCard
