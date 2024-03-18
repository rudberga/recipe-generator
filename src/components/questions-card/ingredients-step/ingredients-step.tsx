import { FC, SetStateAction, useState } from "react"
import classes from './ingredients-step.module.scss'
import { Badge, Group, MultiSelect, Pill, PillGroup } from "@mantine/core"

const IngredientsStep: FC = () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    // Handler for changing selection
    const handleSelectChange = (selected: string[]) => {
        setSelectedValues(selected);
    }

    // Handler for removing a specific pill
    const handleRemoveClick = (valueToRemove: string) => {
        setSelectedValues(selectedValues.filter(value => value !== valueToRemove));
    };

    console.log("VALUES:", selectedValues)

    return (
        <div className={classes.IngredientsStepContainer}>
            <div className={classes.TopSection}>
                <p>Ingredienser</p>
                <p>Välj dina ingredienser nedanför så sköter vi resten! :)</p>
            </div>
            <div>
                <div>
                    <MultiSelect
                        // label="Your favorite libraries"
                        placeholder="Pick value"
                        data={['Mjölk', 'Ägg', 'Smör', 'Socker']}
                        value={selectedValues}
                        onChange={handleSelectChange}
                        nothingFoundMessage="Oops, vi hittade inget..."
                        searchable
                        classNames={{ pill: classes.SearchIngredientsPill }}
                    />
                    <PillGroup>
                        {selectedValues.map((value) => (
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
                <div>SUGGESTIONS DOWN HERE</div>
            </div>
        </div>
    )
}

export default IngredientsStep