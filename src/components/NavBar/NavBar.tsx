import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from 'react-scroll';

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
