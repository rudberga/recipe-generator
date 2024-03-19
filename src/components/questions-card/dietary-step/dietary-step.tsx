import { UseFormReturnType } from "@mantine/form";
import { FC } from "react"
import { FormValues } from "../questions-card";
import FormMultiselect from "../form-multiselect/form-multiselect";

interface FormInputProps {
    valuesInputForm: UseFormReturnType<FormValues>;
    errors: any
}

const DietaryStep: FC<FormInputProps> = ({ 
    valuesInputForm,
    errors, 
}) => {
    return (
        <FormMultiselect
            valuesInputForm={valuesInputForm}
            data={['Vegan', 'Vegetarian', 'Halal', 'Glutenintolerant']}
            label="Diet"
            placeholder="Välj din diet"
            nothingFoundMessage="Oops, vi hittade inget..."
            field="dietary"
        />
    );
};

export default DietaryStep