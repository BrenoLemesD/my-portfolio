import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";


const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        padding: "20px",
        height: "100vh"
    }))

    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">            
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <StyledImage src={Avatar}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">Breno Diamantino</Typography>
                    <Typography color="primary.contrastText" variant="h3" textAlign="center">Desevolvedor de Software</Typography>
                    <Grid container display="flex" justifyContent="center">
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                          <Button color="secondary" variant="outlined">
                        <DownloadIcon />
                        Download cv
                          </Button>
                        </Grid>
                          <Grid item xs={12} md={4} display="flex" justifyContent="center">
                        <Button color="secondary" variant="outlined">
                        <MailOutlineIcon  />
                        Entre em contato!
                          </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  