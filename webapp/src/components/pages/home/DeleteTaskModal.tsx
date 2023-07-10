import { useSelector } from "react-redux";

import { getSelectedTaskId } from "../../../redux-store/selectors";
import TaskModal from "../../common/Modal";
import { IconDanger } from "../../common/icons/IconDanger";
import React from "react";

export const DeleteTaskModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onDelete: (item: number | null) => void;
}> = ({ isOpen, onClose, onDelete }) => {
  const taskId = useSelector(getSelectedTaskId);
  return (
    <TaskModal
      isOpen={isOpen}
      onCancel={() => onClose()}
      onSubmit={() => onDelete(taskId)}
      icon={<IconDanger />}
      operationName="Delete task"
      hint="Are you sure you want to delete the task? This action
                      cannot be undone."
      operationButton="Delete"
    />
  );
};

export default DeleteTaskModal;
