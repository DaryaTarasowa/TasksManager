import { IconTask } from "../../common/icons/IconTask";
import React from "react";
import { ITaskInfo } from "../../../interface/ITaskInfo";
import { useSelector } from "react-redux";
import { getSelectedTaskDetail } from "../../../redux-store/selectors";

export const Task: React.FC<{
  onSelect: () => void;
  task: ITaskInfo;
  onDeleteClick: () => void;
}> = ({ task, onSelect, onDeleteClick }) => {
  const selectedTask = useSelector(getSelectedTaskDetail);
  const showSelection =
    selectedTask?.id === task?.id
      ? "ring-indigo-500 border-indigo-500 border-2 ring-2"
      : "";
  return (
    <div
      className={
        "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border rounded shadow cursor-pointer" +
        showSelection
      }
      onClick={() => onSelect()}
    >
      <div className="flex items-start">
        <div className="h-12 flex-shrink-0 items-center justify-center sm:mx-0">
          <IconTask color={task.priority || "AVERAGE"} />
        </div>
        <div className="mt-3 text-center ml-4 mt-0 sm:text-left">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            {task.title}
          </h3>
          <h5 className="text-sm leading-6 text-gray-900">
            {task.description}
          </h5>
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={() => onDeleteClick()}>Delete</button>
      </div>
    </div>
  );
};
