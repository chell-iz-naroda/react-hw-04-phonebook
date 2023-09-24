import { Label, Input } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
    return (
        <Label>Find contact by name
            <Input
                type="text"
                name="filter"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={value}
                onChange={evt => onChange(evt.target.value)}
            />
        </Label>
    );
};    