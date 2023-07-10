import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { ITaskInfo } from "../../../interface/ITaskInfo";
import { createTask } from "../../../api/service";
import { sidebarActions } from "../../../redux-store/reducer/sidebar";
import { tasksActions } from "../../../redux-store/reducer/tasks";
import { selectionActions } from "../../../redux-store/reducer/selection";
import { AxiosError } from "axios";

export const EmptyTask: React.FC = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useQuery<ITaskInfo>(
    "task",
    createTask,
    { refetchOnWindowFocus: false, enabled: false },
  );

  useEffect(()=>{
    if (data?.id) {
      dispatch(tasksActions.addTask({ taskDetail: data }));
      dispatch(selectionActions.setSelection({ taskId: data.id }));
      dispatch(selectionActions.updateSelectedTask({ taskDetail: data }));
      dispatch(sidebarActions.setOpen({ isOpen: true }));
    } else if (isLoading) {
      dispatch(sidebarActions.setLoading({ isLoading: true }));
    } else {
      dispatch(sidebarActions.setError({ error: error as AxiosError }));
    }
  },[data,error,isLoading,refetch])


  if (error) {
    return (
      <button
        className="bg-gray-100 text-gray-900 border rounded inset cursor-pointer"
        onClick={() => refetch()}
      >
        <div className="text-center">
          <h1 className="text-base font-semibold leading-6">
            Error. Try one more time
          </h1>
        </div>
      </button>
    );
  }

  if (isLoading) {
    return (
      <button
        className="bg-gray-100 text-gray-900 border rounded inset cursor-pointer"
        onClick={() => refetch()}
      >
        <div className="text-center">
          <h1 className="text-base font-semibold leading-6">Loading...</h1>
        </div>
      </button>
    );
  }

  return (
    <button
      className="bg-gray-100 text-gray-900 border rounded inset cursor-pointer"
      onClick={() => refetch()}
    >
      <div className="text-center">
        <h1 className="text-base font-semibold leading-6">Add task</h1>
      </div>
    </button>
  );
};
