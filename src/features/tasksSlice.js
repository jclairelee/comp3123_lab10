import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ title, description, deadline }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            deadline,
            completed: false,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    toggleTask(state, action) {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
