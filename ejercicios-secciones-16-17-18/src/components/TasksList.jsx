import { Container, Typography } from "@mui/material";
import TasksTable from "./TasksTable";
import { useState } from "react";
import { CheckCircleOutline } from "@mui/icons-material";
import TaskForm from "./forms/TaskForm";

const TasksList = () => {
    const [tasks, setTasks] = useState([]);
    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function removeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }
    return (
        <Container>
            <Typography variant="h3">
                {tasks.length > 0 &&
                    `You have ${tasks.length} task${
                        tasks.length > 1 ? "s" : ""
                    } pending...`}
            </Typography>
            {tasks.length > 0 ? (
                <TasksTable
                    tasks={tasks}
                    completeTask={completeTask}
                    removeTask={removeTask}
                />
            ) : (
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        marginTop: "25px"
                    }}
                >
                    <CheckCircleOutline color="success" />
                    <Typography variant="body1">
                        Congrats! You have no tasks left.
                    </Typography>
                </Container>
            )}
            <TaskForm add={addTask} emptyList={!tasks.length} />
        </Container>
    );
};

export default TasksList;
