import { FC } from 'react'
import { MultiSelect, Pill, PillGroup } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { FormValues } from '../questions-card'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import classes from './form-multiselect.module.scss'

interface FormMultiselectProps {
	valuesInputForm: UseFormReturnType<FormValues>
	data: string[]
	label: string
	placeholder: string
	nothingFoundMessage: string
	field: keyof FormValues
}

const FormMultiselect: FC<FormMultiselectProps> = ({
	valuesInputForm,
	data,
	label,
	placeholder,
	nothingFoundMessage,
	field,
}) => {
	const handleRemoveClick = (valueToRemove: string) => {
		const newValues = valuesInputForm.values[field].filter(
			(value) => value !== valueToRemove
		)
		valuesInputForm.setFieldValue(field, newValues)
	}

	// console.log("VALUEEEES:", valuesInputForm.getInputProps(field))

	return (
		<div className={classes.StepContainer}>
			<div className={classes.TopSection}>
				<p>{label}</p>
				<p>{placeholder}</p>
			</div>
			<div className={classes.SelectPillsContainer}>
				<div>
					<MultiSelect
						placeholder={"Sök här"}
						data={data}
						nothingFoundMessage={nothingFoundMessage}
						rightSection={<FaMagnifyingGlass size={20}/>}
						searchable
						comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
						{...valuesInputForm.getInputProps(field)}
						classNames={{
							input: classes.SearchInput,
							pill: classes.SearchPill,
							section: classes.SearchSection,
						}}
					/>
				</div>
				<div>
					<PillGroup>
						{valuesInputForm.values[field].map((value) => (
							<Pill
								key={value}
								size='md'
								withRemoveButton
								onRemove={() => handleRemoveClick(value)}
								classNames={{ root: classes.PillRoot }}
							>
								{value}
							</Pill>
						))}
					</PillGroup>
				</div>
			</div>
			{/* <div>SUGGESTIONS DOWN HERE</div> */}
		</div>
	)
}

export default FormMultiselect
