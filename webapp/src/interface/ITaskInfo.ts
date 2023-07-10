export interface ITaskInfo {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  dueDate?: string;
  resolvedAt?: string;
  title?: string;
  description?: string;
  priority?: string;
  status?: string;
}

export interface ICreateTaskRequest {
  dueDate: string;
  resolvedAt: string;
  title: string;
  description: string;
  priority: "LOW" | "HIGH" | "AVERAGE";
  status: "OPEN" | "IN_PROGRESS" | "DONE";
}

export interface IUpdateTaskRequest {
  id?: number;
  dueDate?: string;
  resolvedAt?: string;
  title?: string;
  description?: string;
  priority?: string;
  status?: string;
}
