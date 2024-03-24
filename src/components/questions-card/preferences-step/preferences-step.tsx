import { UseFormReturnType } from '@mantine/form'
import { FC, useEffect, useState } from 'react'
import { FormValues } from '../questions-card'
import FormMultiselect from '../form-multiselect/form-multiselect'

interface Preferences {
	id: number
	preference: string
}

interface FormInputProps {
	valuesInputForm: UseFormReturnType<FormValues>
	errors: any
}

const PreferencesStep: FC<FormInputProps> = ({ valuesInputForm, errors }) => {
	const [preferences, setPreferences] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const response = await fetch('/api/fetchSupabasePreferences')
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const options: Preferences[] = await response.json()
				setPreferences(options.map((option) => option.preference))
			} catch (err) {
				setError('Failed to fetch dietary options')
				console.error(err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	// if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>

	return (
		<FormMultiselect
			valuesInputForm={valuesInputForm}
			data={preferences}
			label='Vad gillar du?'
			placeholder='Klicka i dina preferenser, så anpassar vi receptet.'
			nothingFoundMessage='Oops, vi hittade inget...'
			field='preferences'
		/>
	)
}

export default PreferencesStep
