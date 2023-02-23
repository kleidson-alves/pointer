import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { API_URL } from "../utils/constants/constants";

interface ITask {
  name: string;
  date: string;
  startHour: string;
  endHour: string;
  duration: string;
}

interface ICurrentTask {
  name: string;
  date: Date;
}

interface ITaskContextProps {
  loadTask: () => ICurrentTask | null;
  saveCurrentTask: (task: ICurrentTask) => void;
  saveTask: (task: ITask) => Promise<void>;
  tasks: ITask[];
}

interface ITaskProviderProps {
  children: React.ReactNode;
}

const TaskContext = createContext<ITaskContextProps>({} as ITaskContextProps);

export const TaskProvider: React.FC<ITaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const loadAllTasks = useCallback(async () => {
    const response = await axios.get<ITask[]>(API_URL);

    setTasks(response.data);
  }, []);

  const loadTask = useCallback(() => {
    const task = localStorage.getItem("@checkpoint-task");

    if (!task) {
      return null;
    }

    return JSON.parse(task);
  }, []);

  const saveCurrentTask = useCallback((task: ICurrentTask) => {
    localStorage.setItem("@checkpoint-task", JSON.stringify(task));
  }, []);

  const saveTask = async (task: ITask) => {
    localStorage.removeItem("@checkpoint-task");
    const tasksArray = [task, ...tasks];

    setTasks(tasksArray);

    const response = await axios.post(API_URL, task);

    console.log(response);
  };

  useEffect(() => {
    const json = localStorage.getItem("@checkpoint-tasks");

    loadAllTasks();

    if (json) {
      setTasks(JSON.parse(json));
    }
  }, [loadAllTasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, loadTask, saveCurrentTask, saveTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask should be used within TaskProvider");
  }

  return context;
}
