import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [data, setData] = useState([]);

    const selectItem = (id) => {
        const updateData = data.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setData(updateData);
    };

    const deleteItem = (id) => {
        const filteredData = data.filter((item) => {
            return item.id !== id;
        });
        setData(filteredData);
    };

    return (
        <div className="App">
            <div className="container">
                <h1 className="title">Daily To Do List</h1>
                <Form setData={setData} />
                <TodoList props={{ data, selectItem, deleteItem }} />
                <hr />
                <footer>
                    <p>Items: {data.length}</p>
                    <button
                        onClick={() => {
                            setData([]);
                        }}
                    >
                        Clear All
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default App;
