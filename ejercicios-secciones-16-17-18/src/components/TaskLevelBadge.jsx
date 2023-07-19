import { Badge, Container } from "@mui/material";
import PropTypes from "prop-types";
import Task from "../models/task.class";

const TaskLevelBadge = ({ task }) => {
    return (
        <Container>
            <Badge color="primary" badgeContent={task.level}></Badge>
        </Container>
    );
};

TaskLevelBadge.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskLevelBadge;
