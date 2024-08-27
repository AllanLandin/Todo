import { createContext, ReactNode, useState } from "react";
import { Itask, ITasksContext } from "../utils/types";

export const taskContext = createContext<ITasksContext>({
  tasks: [],
  setTasks: () => {},
});

interface ItaskContextProviderProps {
  children: ReactNode;
}

export function TaskContextProvider({ children }: ItaskContextProviderProps) {
  const [tasks, setTasks] = useState<Itask[]>([]);

  const value: ITasksContext = {
    tasks,
    setTasks,
  };

  return <taskContext.Provider value={value}>{children}</taskContext.Provider>;
}
