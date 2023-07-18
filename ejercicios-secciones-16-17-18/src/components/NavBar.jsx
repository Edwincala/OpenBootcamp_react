import { Box, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                width: "100%",
                margin: 0,
                alignItems: "center",
                textAlign: "center",
                position: "fixed",
                top: 0,
                left: 0,
                padding: "15px 0",
                display: "flex",
                justifyContent: "space-around",
                backgroundColor: "white",
                borderBottom: "1px solid blue",
                color: "black"
            }}
        >
            <Typography
                onClick={() => navigate("/")}
                variant="h6"
                sx={{
                    cursor: "pointer",
                    ":hover": {
                        textDecoration: "underline",
                        opacity: "50%",
                        color: "blue"
                    }
                }}
            >
                Tasks App
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "space-between",
                    gap: "15px",
                    color: "black"
                }}
            >
                <Link
                    color="inherit"
                    underline="hover"
                    variant="body1"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    color="inherit"
                    underline="hover"
                    variant="body1"
                    href="/login"
                >
                    Login
                </Link>
                <Link
                    color="inherit"
                    underline="hover"
                    variant="body1"
                    href="/about"
                >
                    About
                </Link>
            </Box>
        </div>
    );
};

export default NavBar;
