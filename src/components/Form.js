import { useState } from "react";
import "./Form.css";

function Form({ setData }) {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let item = {
            id: Date.now(),
            text: todo,
            completed: false,
        };
        setData((prev) => [...prev, item]);
        setTodo("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                placeholder="Add new list item"
                autoComplete="off"
                required
                autoFocus
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
                value={todo}
            />
            <button className="btn" type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;
