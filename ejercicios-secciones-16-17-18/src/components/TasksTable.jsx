import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

import PropTypes from "prop-types";
import TaskLevelBadge from "./TaskLevelBadge";
import TaskIconCompleted from "./TaskIconCompleted";
import { RemoveCircle } from "@mui/icons-material";

const TasksTable = ({ tasks, completeTask, removeTask }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{task.name}</TableCell>
                                <TableCell>{task.description}</TableCell>
                                <TableCell>
                                    <TaskLevelBadge task={task} />
                                </TableCell>
                                <TableCell>
                                    <Container>
                                        <TaskIconCompleted
                                            task={task}
                                            complete={completeTask}
                                        />
                                        <RemoveCircle
                                            onClick={() => removeTask(task)}
                                            sx={{
                                                color: "blue",
                                                fontSize: "30px"
                                            }}
                                        />
                                    </Container>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TasksTable.propTypes = {
    tasks: PropTypes.array,
    completeTask: PropTypes.func,
    removeTask: PropTypes.func
};

export default TasksTable;
