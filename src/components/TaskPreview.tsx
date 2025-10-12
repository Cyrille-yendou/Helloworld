import type { Task } from "../Task";

type TaskPreviewProps = {
  task: Task;
  valider: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskPreview({ task, valider, onDelete  }: TaskPreviewProps) {
  return (
    <li>
      {task.content}{" "}
      {task.status === "done" ? "✅" : task.status === "doing" ? "⌚" : "⏳"}
      {task.status !== "done" && (
        <button onClick={() => valider(task.id)}>Valider</button>
      )}
      {task.status === "done" && (
        <button onClick={() => onDelete(task.id)}>supprimer</button>   
      )}
    </li>
  );
}

