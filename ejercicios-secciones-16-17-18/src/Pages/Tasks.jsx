import { Container, Typography } from "@mui/material";
import TasksList from "../components/TasksList";

const Tasks = () => {
    return (
        <Container>
            <Typography variant="h1">Tasks</Typography>
            <TasksList />
        </Container>
    );
};

export default Tasks;
