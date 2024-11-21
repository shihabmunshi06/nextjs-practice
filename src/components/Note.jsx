import React from "react";
import { useDispatch } from "react-redux";
import { allTaskActions } from "../store/slices/allTask";
import { completedTaskActions } from "../store/slices/completedTask";
function Note(props) {
    const dispatch = useDispatch()
    function handleDone() {
        dispatch(completedTaskActions.addCompletedTask(props.data))
        // dispatch(remainingTaskActions.deleteRemainingTask())
    }
    function handleDelete() {
        dispatch(allTaskActions.deleteTask(props.index))
    }
    return (
        <div className="note">
            <h1>{props.data.title}</h1>
            <p>{props.data.content}</p>
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={handleDone}>Done</button>
        </div>
    );
}

export default Note;
