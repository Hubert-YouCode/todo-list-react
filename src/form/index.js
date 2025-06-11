import { useState } from "react";
import "./style.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("")
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;