import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface Props {
    onChange: (value: string) => void
}

const Dropdown = () => {

    const types: string[] = ["sql", "bigquery", "db2", "db2i", "hive", "mariadb", "mysql", "tidb", "m1ql", "plsql", "postgresql", "redshift", "singlestoredb", "snowflake", "spark", "sqlite", "transactsql", "trino"]

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                {types.map((ele) => <MenuItem>{ele}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default Dropdown