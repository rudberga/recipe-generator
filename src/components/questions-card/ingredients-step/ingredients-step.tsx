import { FC, SetStateAction, useState } from "react"
import classes from './ingredients-step.module.scss'
import { Badge, Group, MultiSelect, Pill, PillGroup } from "@mantine/core"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "../questions-card";

interface FormInputProps {
    valuesInputForm: UseFormReturnType<FormValues>
    errors: any
}

const IngredientsStep: FC<FormInputProps> = ({
    valuesInputForm,
    errors,
}) => {
    // Handler for removing a specific pill
    const handleRemoveClick = (valueToRemove: string) => {
        const newValues = valuesInputForm.values.ingredients.filter(value => value !== valueToRemove);
        valuesInputForm.setFieldValue('ingredients', newValues);
    };

    console.log("VALUES:", valuesInputForm.getInputProps('ingredients'))

    return (
        <div className={classes.IngredientsStepContainer}>
            <div className={classes.TopSection}>
                <p>Ingredienser</p>
                <p>Välj dina ingredienser nedanför så sköter vi resten! :)</p>
            </div>
            <div className={classes.SelectPillsContainer}>
                <div>
                    <MultiSelect
                        placeholder="Pick value"
                        data={['Mjölk', 'Ägg', 'Smör', 'Socker']}
                        nothingFoundMessage="Oops, vi hittade inget..."
                        searchable
                        rightSection={<FaMagnifyingGlass />}
                        classNames={{
                            input: classes.SearchIngredientsInput,
                            pill: classes.SearchIngredientsPill,
                        }}
                        {...valuesInputForm.getInputProps('ingredients')}
                    />
                </div>
                <div>
                    <PillGroup>
                        {valuesInputForm.values.ingredients.map((value) => (
                            <Pill
                                key={value}
                                size="md"
                                withRemoveButton
                                classNames={{ root: classes.PillRoot }}
                                onRemove={() => handleRemoveClick(value)}
                            >
                                {value}
                            </Pill>
                        ))}
                    </PillGroup>
                </div>
            </div>
            <div>SUGGESTIONS DOWN HERE</div>
        </div>
    )
}

export default IngredientsStep