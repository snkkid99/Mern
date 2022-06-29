import { useState } from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { useTodosContext } from "../hooks/useTodosContext";

const TodoForm = () => {
  const { dispatch } = useTodosContext();

  const [title, setTitle] = useState("");
  const [priorite, setPriorite] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const onFinish = async (e) => {
    //e.preventDefault();
    console.log("Success:", e);

    const todo = { title, priorite, description };

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(e),
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 8 }}
    >
      <Form.Item label="Title" name="title">
        <Input name="title" placeholder="Enter a Title" />
      </Form.Item>
      <Form.Item label="Priorite" name="priorite">
        <InputNumber name="priorite" />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input name="description" placeholder="Enter the Description" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
