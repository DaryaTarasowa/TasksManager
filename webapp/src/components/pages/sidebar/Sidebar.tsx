import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import { getSelectedTaskDetail } from "../../../redux-store/selectors";
import { selectionActions } from "../../../redux-store/reducer/selection";
import debounce from "lodash/debounce";
import { updateTask } from "../../../api/service";
import { tasksActions } from "../../../redux-store/reducer/tasks";
import { Input } from "../../common/Form/Input";

export const Sidebar: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(getSelectedTaskDetail);

  const triggerUpdate = useCallback(
    debounce((updatedTask) => updateTask(updatedTask), 1000),
    [updateTask],
  );

  const handleSave = (key: any, newValue: string) => {
    const updatedTask = { ...selectedTask, [key]: newValue };
    triggerUpdate(updatedTask);
    dispatch(
      selectionActions.updateSelectedTask({
        taskDetail: updatedTask,
      }),
    );
    dispatch(tasksActions.updateTask({ updatedTask }));
  };

  return (
    <div className="flex-none bg-gray-900 sm:w-96">
      <form className="px-4">
        <Input
          type="Text"
          id="taskName"
          placeholder="Task title..."
          value={selectedTask?.title}
          onValueChanged={(newValue) => handleSave("title", newValue)}
        />
        <Input
          type="Multiline"
          id="description"
          rows={4}
          placeholder="Description..."
          value={selectedTask?.description || ""}
          onValueChanged={(newValue) => handleSave("description", newValue)}
        />

        <div className="text-white py-2">
          <label htmlFor="priority" className="text-sm dark:text-white">
            Priority:
          </label>
          <Input
            type="Select"
            id="priority"
            value={selectedTask?.priority}
            onValueChanged={(newValue) => handleSave("priority", newValue)}
            options={[
              { value: "LOW", name: "Low" },
              { value: "AVERAGE", name: "Average" },
              { value: "HIGH", name: "High" },
            ]}
          />
        </div>
        <div className="text-white py-2">
          <label htmlFor="status" className="text-sm dark:text-white">
            Status:
          </label>
          <Input
            type="Select"
            id="status"
            value={selectedTask?.status}
            onValueChanged={(newValue) => handleSave("status", newValue)}
            options={[
              { value: "OPEN", name: "Open" },
              { value: "IN_PROGRESS", name: "In Progress" },
              { value: "DONE", name: "Done" },
            ]}
          />
        </div>
      </form>
      <div className="py-6 text-center p-6 flex-0">
        <button
          className="text-indigo-900 bg-gray-300 px-6 py-2 rounded hover:bg-gray-200"
          onClick={() => onClose()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
