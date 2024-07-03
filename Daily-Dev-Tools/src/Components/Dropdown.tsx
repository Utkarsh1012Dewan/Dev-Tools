import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface Props {
    dialect: string
    onChange: (value: string) => void
}

const Dropdown = ({ dialect, onChange }: Props) => {

    const types = ["sql", "bigquery", "db2", "db2i", "hive", "mariadb", "mysql", "tidb", "m1ql", "plsql", "postgresql", "redshift", "singlestoredb", "snowflake", "spark", "sqlite", "transactsql", "trino"]

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {dialect}
            </MenuButton>
            <MenuList>
                {types.map((ele, index) => (
                    <MenuItem key={index} onClick={() => onChange(ele)}>
                        {ele}
                    </MenuItem>))}
            </MenuList>
        </Menu>
    )
}

export default Dropdown