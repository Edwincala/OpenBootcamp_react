import { DoneOutline, Pending } from "@mui/icons-material";
import PropTypes from "prop-types";
import Task from "../models/task.class";

const TaskIconCompleted = ({ task, complete }) => {
    return (
        <>
            {task.completed ? (
                <DoneOutline
                    onClick={() => complete(task)}
                    sx={{ color: "green", fontSize: "30px" }}
                />
            ) : (
                <Pending
                    onClick={() => complete(task)}
                    sx={{ color: "red", fontSize: "30px" }}
                />
            )}
        </>
    );
};

TaskIconCompleted.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func
};

export default TaskIconCompleted;
