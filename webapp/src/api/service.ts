import { axiosInstance } from "./axiosInstance";
import { ITaskInfo, IUpdateTaskRequest } from "../interface/ITaskInfo";

export const getAllTasks = async () =>
  (await axiosInstance.get<ITaskInfo[]>(`/tasks`)).data;

export const getTask = async (taskData: ITaskInfo) =>
  (await axiosInstance.get<ITaskInfo>(`/tasks?id=${taskData.id}`)).data;

export const createTask = async () =>
  (await axiosInstance.post<ITaskInfo>(`/tasks`)).data;

export const updateTask = async (taskData: IUpdateTaskRequest | null) =>
  (await axiosInstance.patch<ITaskInfo>(`/tasks`, taskData)).data;

export const deleteTask = async (taskId: number) =>
  (await axiosInstance.delete<ITaskInfo>(`/tasks?id=${taskId}`)).data;
