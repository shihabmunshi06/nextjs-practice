import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { allTaskActions } from "../store/slices/allTask";

function CreateArea() {
    const dispatch = useDispatch()
    const [typedNote, setTypeNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(e) {
        const { name, value } = e.target
        setTypeNote((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }
    function handleSubmit(e) {

        dispatch(allTaskActions.addTask(typedNote))
        setTypeNote({ title: "", content: "" })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" value={typedNote.title} onChange={handleChange} placeholder="Title" />
                <textarea name="content" value={typedNote.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
                <button >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
