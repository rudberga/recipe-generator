import { UseFormReturnType } from "@mantine/form";
import { FC } from "react"
import { FormValues } from "../questions-card";
import FormMultiselect from "../form-multiselect/form-multiselect";

interface FormInputProps {
    valuesInputForm: UseFormReturnType<FormValues>;
    errors: any
}

const PreferencesStep: FC<FormInputProps> = ({ 
    valuesInputForm,
    errors, 
}) => {
    return (
        <FormMultiselect
            valuesInputForm={valuesInputForm}
            data={['Italienskt', 'Husmanskost', 'Franskt', 'Japanskt']}
            label="Vad är du sugen på?"
            placeholder="Välj din preferens så tar vi hand om resten!"
            nothingFoundMessage="Oops, vi hittade inget..."
            field="preferences"
        />
    );
};

export default PreferencesStep