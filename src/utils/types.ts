export interface Itask {
  id: number;
  checked: boolean;
  text: string;
}

export interface ITasksContext {
  tasks: Itask[];
  setTasks: (tasks: Itask[]) => void;
}
