import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "80px",
                padding: 0,
                margin: 0
            }}
        >
            <Typography variant="h1">Home Page</Typography>
            <Typography variant="h6">
                Organize your tasks, plan your day, increase your productivity
            </Typography>
            <Button
                onClick={() => navigate("/tasks")}
                variant="contained"
                size="large"
            >
                Go to tasks
            </Button>
        </Container>
    );
};

export default Home;
