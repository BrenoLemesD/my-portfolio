import React from 'react';
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from 'react-scroll';

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: '#1C1C1C', // Cor de fundo da barra de navegação
    }));

    return (
        <AppBar position="absolute" sx={{ backgroundColor: '#333333' }}>
            <StyledToolbar>
                <MenuItem>
                    <Link to="about" smooth={true} duration={500} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                        About
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="skills" smooth={true} duration={500} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                        Skills
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="projects" smooth={true} duration={500} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                        My Projects
                    </Link>
                </MenuItem>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;
