import { Provider as ReduxProvider } from "react-redux";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { store } from "./store";

export function App() {

  return (
    <ReduxProvider store={store}>
      <TaskList />
      <AddTask />
    </ReduxProvider>
  )
}

