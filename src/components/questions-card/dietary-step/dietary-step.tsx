import { UseFormReturnType } from "@mantine/form";
import { FC, useEffect, useState } from "react";
import { FormValues } from "../questions-card";
import FormMultiselect from "../form-multiselect/form-multiselect";

interface DietaryOptions {
    id: number;
    diet_option: string;
}

interface FormInputProps {
    valuesInputForm: UseFormReturnType<FormValues>;
    errors: any;
}

const DietaryStep: FC<FormInputProps> = ({ valuesInputForm, errors }) => {
    const [dietaryOptions, setDietaryOptions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/fetchSupabaseDietaryOptions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const options: DietaryOptions[] = await response.json();
                setDietaryOptions(options.map(option => option.diet_option));
            } catch (err) {
                setError('Failed to fetch dietary options');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <FormMultiselect
            valuesInputForm={valuesInputForm}
            data={dietaryOptions}
            label="Diet"
            placeholder="Välj din diet"
            nothingFoundMessage="Oops, vi hittade inget..."
            field="dietary"
        />
    );
};

export default DietaryStep;
