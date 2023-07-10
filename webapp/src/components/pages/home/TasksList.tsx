import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITaskInfo } from "../../../interface/ITaskInfo";
import { DeleteTaskModal } from "./DeleteTaskModal";
import { EmptyTask } from "./EmptyTask";
import { Task } from "./Task";
import { useInitTasks } from "../../../api/hooks";
import { AxiosError } from "axios";

import { selectionActions } from "../../../redux-store/reducer/selection";
import { tasksActions } from "../../../redux-store/reducer/tasks";
import { getTasks } from "../../../redux-store/selectors";
import { useMutation } from "react-query";
import { deleteTask } from "../../../api/service";
import { sidebarActions } from "../../../redux-store/reducer/sidebar";

export function TasksList() {
  const dispatch = useDispatch();
  useInitTasks();

  const { tasks, isLoading, error } = useSelector(getTasks);
  const [deleteTaskModalOpen, setDeleteTaskModalOpen] = useState(false);
  const deleteTaskMutation = useMutation(deleteTask);

  const deleteTaskHandler = (taskId: number | null) => {
    if (taskId) {
      dispatch(selectionActions.reset());
      setDeleteTaskModalOpen(false);
      dispatch(sidebarActions.setOpen({ isOpen: false }));
      dispatch(tasksActions.deleteTask({ taskId }));
      deleteTaskMutation.mutate(taskId);
    }
  };

  const handleTaskDeletion = (item: ITaskInfo) => {
    if (item.id) {
      dispatch(selectionActions.setSelection({ taskId: item.id }));
      setDeleteTaskModalOpen(true);
    }
  };

  const selectTask = (item: ITaskInfo) => {
    dispatch(selectionActions.updateSelectedTask({ taskDetail: item }));
    if (item.id) {
      dispatch(selectionActions.setSelection({ taskId: item.id }));
    }
    dispatch(sidebarActions.setOpen({ isOpen: true }));
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    const axiosError = error as AxiosError;
    return <>Error: {axiosError.message}</>;
  }
  return (
    <div className="grow">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 p-2">
        <EmptyTask />
        {tasks?.map((item: ITaskInfo, index: number) => {
          return (
            <Task
              key={index}
              onSelect={() => selectTask(item)}
              task={item}
              onDeleteClick={() => {
                handleTaskDeletion(item);
              }}
            />
          );
        })}
      </div>

      <DeleteTaskModal
        isOpen={deleteTaskModalOpen}
        onClose={() => setDeleteTaskModalOpen(false)}
        onDelete={deleteTaskHandler}
      />
    </div>
  );
}

export default TasksList;
