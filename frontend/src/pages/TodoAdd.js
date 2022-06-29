import { useEffect } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

// components
import TodoDetails from "../components/TodoDetails";
import TodoForm from "../components/TodoForm";
import { Layout } from "antd";

const TodoAdd = () => {
  const { todos, dispatch } = useTodosContext();
  const { Sider, Content } = Layout;

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
      }
    };

    fetchTodos();
  }, [dispatch]);

  return <TodoForm />;
};

export default TodoAdd;
