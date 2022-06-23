import { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

const TodoForm = () => {
  const { dispatch } = useTodosContext();

  const [title, setTitle] = useState("");
  const [priorite, setPriorite] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = { title, priorite, description };

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setPriorite("");
      setDescription("");
      dispatch({ type: "CREATE_TODO", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Todo</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Priorite:</label>
      <input
        type="number"
        onChange={(e) => setPriorite(e.target.value)}
        value={priorite}
        className={emptyFields.includes("priorite") ? "error" : ""}
      />

      <label>Description:</label>
      <input
        type="textarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      />

      <button>Add Todo</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TodoForm;
