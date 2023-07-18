import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const registerSchema = yup.object({
    username: yup
        .string()
        .min(6, "Username should be longer")
        .required("Please enter your account username"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Please enter your email address"),
    password: yup
        .string()
        .min(8, "Password should be longer")
        .required("Please enter a password"),
    confirm: yup
        .string()
        .required("Password confirmation is required")
        .oneOf([yup.ref("password"), null], "Passwords must match")
});

const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: ""
};

const RegisterForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: registerSchema,
        onSubmit: (values) => alert(JSON.stringify(values, null, 2))
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
                    id="email"
                    label="Email"
                    value={formik.values.email}
                    variant="standard"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                <TextField
                    id="confirm"
                    label="Confirm"
                    value={formik.values.confirm}
                    variant="standard"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.confirm && Boolean(formik.errors.confirm)
                    }
                    helperText={formik.touched.confirm && formik.errors.confirm}
                />
                <Button variant="contained" type="submit">
                    Sign Up
                </Button>
            </Box>
        </form>
    );
};

export default RegisterForm;
{
    /* <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        /> */
}
