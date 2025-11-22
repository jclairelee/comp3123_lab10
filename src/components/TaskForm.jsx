import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    dispatch(
      addTask({
        title: trimmedTitle,
        description: description.trim(),
        deadline: deadline || null,
      })
    );

    setTitle("");
    setDeadline("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1.5rem",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Create a new task</h2>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Title:{" "}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            style={{ width: "100%", padding: "0.4rem" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Deadline:{" "}
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            style={{ padding: "0.4rem" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Description:{" "}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
            rows={3}
            style={{ width: "100%", padding: "0.4rem" }}
          />
        </label>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}
