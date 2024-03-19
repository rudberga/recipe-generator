import { FC } from "react"
// import classes from '../form-multiselect/form-multiselect.module.scss'
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "../questions-card";
import FormMultiselect from "../form-multiselect/form-multiselect";

interface FormInputProps {
    valuesInputForm: UseFormReturnType<FormValues>;
    errors: any
}

const IngredientsStep: FC<FormInputProps> = ({ 
    valuesInputForm,
    errors, 
}) => {
    return (
        <FormMultiselect
            valuesInputForm={valuesInputForm}
            data={['Mjölk', 'Ägg', 'Smör', 'Socker']}
            label="Ingredienser"
            placeholder="Välj dina ingredienser"
            nothingFoundMessage="Oops, vi hittade inget..."
            field="ingredients"
        />
    );
};

export default IngredientsStep;
