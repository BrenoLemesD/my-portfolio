import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledIButtonProps {
  children: ReactNode
}

const StyledButton: React.FC<StyledIButtonProps> = ({children}) => {

    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "300px",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10",
        '&:hover:': {
          backgroundColor: theme.palette.secondary.dark
        }
    }))

    return (
      <>
        <StyledButton>{children}</StyledButton>
      </>
    )
  }
  
  export default StyledButton
  