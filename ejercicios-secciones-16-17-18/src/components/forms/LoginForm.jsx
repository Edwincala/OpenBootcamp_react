import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
    username: yup
        .string()
        .min(6, "Username should be longer")
        .required("Please enter your account username"),
    password: yup
        .string()
        .min(8, "Password should be longer")
        .required("Please enter your password")
});

const initialValues = {
    username: "",
    password: ""
};

const LoginForm = () => {
    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();
    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            const valuesJson = JSON.stringify(values, null, 2);
            setCookies("credentials", valuesJson, { path: "/", maxAge: 3600 });
            navigate("/tasks");
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box
                sx={{
                    margin: "20px auto 10px auto",
                    width: "40%",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    borderRadius: "15px",
                    boxShadow: "3px 3px darkgrey"
                }}
            >
                <TextField
                    id="username"
                    label="Username"
                    value={formik.values.username}
                    variant="standard"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                    }
                    helperText={
                        formik.touched.username && formik.errors.username
                    }
                />

                <TextField
                    id="password"
                    label="Password"
                    value={formik.values.password}
                    variant="standard"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                />

                <Button variant="contained" type="submit">
                    Login
                </Button>
            </Box>
        </form>
    );
};

export default LoginForm;
