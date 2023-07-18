import { Container, Link, Typography } from "@mui/material";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
    return (
        <Container>
            <Typography variant="h1">Login</Typography>
            <LoginForm />
            <Typography variant="body1" mt={2}>
                Not a member? <Link href="/signup">Sign up</Link>
            </Typography>
        </Container>
    );
};

export default Login;
