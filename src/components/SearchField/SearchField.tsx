import Field from "@/src/components/ui/Field";
import {Input} from "@/src/components/ui/Input";
import {Button} from "@/src/components/ui/Button";
import {ButtonGroup} from "@/src/components/ui/ButtonGroup";

const SearchField = () => {
    return (
        <Field>
            <ButtonGroup>
                <Input id="input-button-group" placeholder="Поиск новостей..." />
                <Button variant="outline">Поиск</Button>
            </ButtonGroup>
        </Field>
    )
}

export default SearchField;