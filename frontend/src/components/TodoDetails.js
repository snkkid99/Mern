import { useTodosContext } from "../hooks/useTodosContext";
import { Card, Col } from "antd";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TodoDetails = ({ todo }) => {
  const { dispatch } = useTodosContext();

  const handleClick = async () => {
    const response = await fetch("/api/todos/" + todo._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json });
    }
  };

  return (
    <Col xs={24} xl={8}>
      <p>{todo.title}</p>
      <p>{todo.priorite}</p>
      <p>{todo.description}</p>
      <p>
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </Col>
  );
};

export default TodoDetails;
