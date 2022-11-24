import { IconSearch } from "@tabler/icons"
import Input from "./InputText"


export default function SearchInput() {
    return (
        <Input name='search' placeholder='Buscar en marketplace' Icon={IconSearch} />
    )
}
