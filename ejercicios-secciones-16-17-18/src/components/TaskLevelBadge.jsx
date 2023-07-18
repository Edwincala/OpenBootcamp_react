import { Badge, Container } from "@mui/material";
import PropTypes from "prop-types";
import LEVELS from "../models/level.enum";
import Task from "../models/task.class";

const TaskLevelBadge = ({ task }) => {
    return (
        <Container>
            {LEVELS.NORMAL && (
                <Badge color="primary" badgeContent={task.level}></Badge>
            )}
            {LEVELS.URGENT && (
                <Badge color="primary" badgeContent={task.level}></Badge>
            )}
            {LEVELS.BLOCKING && (
                <Badge color="primary" badgeContent={task.level}></Badge>
            )}
        </Container>
    );
};

TaskLevelBadge.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskLevelBadge;
