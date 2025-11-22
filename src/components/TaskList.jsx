import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../features/tasksSlice";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return <p>No tasks yet. Add your first task above.</p>;
  }

  return (
    <div>
      <h2>Tasks</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              border: "1px solid #ccc",
              padding: "0.75rem",
              marginBottom: "0.5rem",
              borderRadius: "6px",
              backgroundColor: task.completed ? "#e9ffe9" : "#ffffff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.25rem",
              }}
            >
              <div>
                <strong
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </strong>
                {task.deadline && (
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.85rem",
                      color: "#555",
                    }}
                  >
                    (Deadline: {task.deadline})
                  </span>
                )}
              </div>
            </div>

            {task.description && (
              <p style={{ margin: "0.25rem 0 0.5rem" }}>{task.description}</p>
            )}

            <button onClick={() => dispatch(toggleTask(task.id))}>
              {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
            </button>
            <button
              onClick={() => dispatch(removeTask(task.id))}
              style={{ marginLeft: "0.5rem" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
