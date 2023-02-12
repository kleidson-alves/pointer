import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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
  saveCurrentTask: (taskName: ICurrentTask) => void;
  saveTask: (task: ITask) => Promise<void>;
  tasks: ITask[];
}

interface ITaskProviderProps {
  children: React.ReactNode;
}

const TaskContext = createContext<ITaskContextProps>({} as ITaskContextProps);

export const TaskProvider: React.FC<ITaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

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

  const saveTask = useCallback(async (task: ITask) => {
    localStorage.removeItem("@checkpoint-task");

    setTasks((s) => [task, ...s]);
  }, []);

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
