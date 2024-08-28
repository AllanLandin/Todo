interface ITaskClassProps {
  checked: boolean;
  text: string;
}

export class Task {
  static idCounter: number = 0;
  id: number;
  checked: boolean;
  text: string;
  constructor({ checked, text }: ITaskClassProps) {
    this.id = Task.idCounter++;
    this.checked = checked;
    this.text = text;
  }
}
