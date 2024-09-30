import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default, // Preto para o fundo
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0",
        }
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                            Breno Otávio
                        </Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">
                            I'm a Software Engineer
                        </Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon />
                                    <Typography color="primary.contrastText">
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                {/* Envolvendo o botão dentro de uma tag <a> */}
                                <a 
                                  href="mailto:brenolemesd@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Breno%2C%20gostaria%20de%20entrar%20em%20contato%20com%20você." 
                                  style={{ textDecoration: 'none' }}
                                >
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography color="primary.contrastText">
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;
