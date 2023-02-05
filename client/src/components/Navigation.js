import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';

function Navigation() {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<IoMdArrowDropdown />}>
                Navigation
            </MenuButton>
            <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
    )
};

export default Navigation;