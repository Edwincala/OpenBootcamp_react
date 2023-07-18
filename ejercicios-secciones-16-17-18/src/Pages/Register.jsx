import { Container, Link, Typography } from "@mui/material";
import RegisterForm from "../components/forms/RegisterForm";

const Register = () => {
    return (
        <Container sx={{ margin: "auto" }}>
            <Typography variant="h1">Sign Up</Typography>
            <RegisterForm />
            <Typography variant="body1" mt={2}>
                Already a member? <Link href="/login">Log In</Link>
            </Typography>
        </Container>
    );
};

export default Register;
