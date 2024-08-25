export interface Itask {
  checked: boolean;
  text: string;
}

export interface ITasksContext {
  tasks: Itask[];
  setTasks: (tasks: Itask[]) => void;
}
