import { useQuery } from "react-query";

import { getAllTasks } from "./service";
import { ITaskInfo } from "../interface/ITaskInfo";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tasksActions } from "../redux-store/reducer/tasks";
import { AxiosError } from "axios";

export const useInitTasks = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery<ITaskInfo[]>(
    "tasks",
    getAllTasks,
    { refetchOnWindowFocus: false },
  );

  useEffect(() => {
    if (data) {
      dispatch(tasksActions.setTasks({ tasks: data }));
      dispatch(tasksActions.setLoading({ isLoading: false }));
    } else if (isLoading) {
      dispatch(tasksActions.setLoading({ isLoading: true }));
    } else {
      dispatch(tasksActions.setError({ error: error as AxiosError }));
      dispatch(tasksActions.setLoading({ isLoading: false }));
    }
  }, [dispatch, data, isLoading, error]);
};
