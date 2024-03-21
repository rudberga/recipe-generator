import { FC, useEffect, useState } from "react"
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "../questions-card";
import FormMultiselect from "../form-multiselect/form-multiselect";

interface Ingredients {
    id: number;
    ingredient: string;
}

interface FormInputProps {
    valuesInputForm: UseFormReturnType<FormValues>;
    errors: any
}

const IngredientsStep: FC<FormInputProps> = ({ valuesInputForm, errors }) => {
    const [ingredientsOptions, setIngredientsOptions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/fetchSupabaseIngredients');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const options: Ingredients[] = await response.json();
                setIngredientsOptions(options.map(option => option.ingredient));
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
            data={ingredientsOptions}
            label="Ingredienser"
            placeholder="Välj dina ingredienser"
            nothingFoundMessage="Oops, vi hittade inget..."
            field="ingredients"
        />
    );
};

export default IngredientsStep;
