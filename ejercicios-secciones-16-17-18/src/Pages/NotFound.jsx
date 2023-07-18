import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Container
            sx={{ display: "flex", flexDirection: "column", gap: "80px" }}
        >
            <Typography variant="h1">Page Not Found</Typography>
            <Button
                onClick={() => navigate("/")}
                variant="contained"
                size="large"
            >
                Go to Home Page
            </Button>
        </Container>
    );
};

export default NotFound;
