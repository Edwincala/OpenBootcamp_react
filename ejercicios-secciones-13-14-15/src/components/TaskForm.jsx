import * as Yup from "yup";
import LEVELS from "../models/level.enum";
import { ErrorMessage, Field, Form, Formik } from "formik";
const taskSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Task title is too short")
        .required("Task title field is required"),
    description: Yup.string()
        .min(5, "Task description should be longer")
        .required("Task description field is required"),
    level: Yup.string()
        .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING])
        .required("Please select one option")
});

const errorMessageStyle = {
    marginBottom: "10px",
    fontWeight: "normal"
};
const TaskForm = () => {
    const initialValues = {
        name: "",
        description: "",
        level: ""
    };

    // 35A29F
    return (
        <div className="container p-0">
            <div
                style={{
                    padding: "40px",
                    border: "2px solid #97FEED",
                    borderRadius: "15px",
                    color: "#071952",
                    fontWeight: "bolder",
                    backgroundColor: "#35A29F"
                }}
            >
                <h4 className="text-center pb-4">Task Form</h4>
                <Formik
                    initialValues={initialValues}
                    validationSchema={taskSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 2000));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label className="form-label" htmlFor="name">
                                    Title
                                </label>
                                <Field
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Title"
                                />
                            </div>
                            <ErrorMessage
                                name="name"
                                component="label"
                                style={errorMessageStyle}
                            />
                            <div>
                                <label
                                    className="col-form-label"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <Field
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                    className="form-control"
                                />
                            </div>
                            <ErrorMessage
                                name="description"
                                component="label"
                                style={errorMessageStyle}
                            />
                            <div>
                                <label
                                    className="col-form-label"
                                    htmlFor="level"
                                >
                                    Priority Level
                                </label>
                                <Field
                                    className="form-select form-select-md mb-3"
                                    as="select"
                                    id="level"
                                    name="level"
                                >
                                    <option value="">
                                        Select the priority level
                                    </option>
                                    <option value={LEVELS.NORMAL}>
                                        Normal
                                    </option>
                                    <option value={LEVELS.URGENT}>
                                        Urgent
                                    </option>
                                    <option value={LEVELS.BLOCKING}>
                                        Blocking
                                    </option>
                                </Field>
                            </div>
                            <ErrorMessage
                                name="level"
                                component="label"
                                style={errorMessageStyle}
                            />
                            <div>
                                <button
                                    style={{
                                        color: "#97FEED",
                                        backgroundColor: "#071952",
                                        padding: "10px 75px",
                                        border: "2px solid #97FEED",
                                        borderRadius: "5px",
                                        marginTop: "10px"
                                    }}
                                    type="submit"
                                >
                                    Add task
                                </button>
                            </div>

                            {isSubmitting && (
                                <p style={errorMessageStyle}>Adding task</p>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default TaskForm;
