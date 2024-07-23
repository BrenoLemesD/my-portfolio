import { styled } from "@mui/material"

const StyledButton = () => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",

    }))

    return (
      <>
        <StyledButton>texto</StyledButton>
      </>
    )
  }
  
  export default StyledButton
  