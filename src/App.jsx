import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div
      style={{
        padding: "2rem 1rem",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Task Manager (Redux Demo)
      </h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
