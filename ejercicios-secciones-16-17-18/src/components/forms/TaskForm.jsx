import { Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import LEVELS from "../../models/level.enum";
import { useFormik } from "formik";
import PropTypes from "prop-types";

const taskSchema = yup.object({
    name: yup
        .string()
        .min(3, "Task title should be longer")
        .required("Task title is required"),
    description: yup
        .string()
        .min(5, "Task description should be longer")
        .required("Task description is required"),
    level: yup
        .string()
        .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING])
        .required("Please select the task priority")
});

const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: ""
};

const TaskForm = ({ add, emptyList }) => {
    const formik = useFormik({
        validationSchema: taskSchema,
        initialValues,
        onSubmit: (values) => {
            add({ ...values });
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
                    id="name"
                    label="Name"
                    value={formik.values.name}
                    variant="standard"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    id="description"
                    label="Description"
                    value={formik.values.description}
                    variant="standard"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                    }
                    helperText={
                        formik.touched.description && formik.errors.description
                    }
                />
                <TextField
                    id="level"
                    select
                    label="Priority"
                    value={formik.values.level}
                    variant="standard"
                    onChange={formik.handleChange}
                    SelectProps={{ native: true }}
                    error={formik.touched.level && Boolean(formik.errors.level)}
                    helperText={formik.touched.level && formik.errors.level}
                >
                    <option value=""></option>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </TextField>
                <Button variant="contained" type="submit">
                    {emptyList ? "Create task" : "Add task"}
                </Button>
            </Box>
        </form>
    );
};

TaskForm.propTypes = {
    add: PropTypes.func,
    emptyList: PropTypes.bool
};

export default TaskForm;
