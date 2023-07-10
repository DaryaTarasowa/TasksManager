import React from "react";

interface IInput {
  type: "Text" | "Multiline" | "Select";
  id: string;
  placeholder?: string;
  value?: string;
  onValueChanged?: (expression: string) => void;
  options?: { name: string; value: string }[];
  rows?: number;
}

export const Input: React.FC<IInput> = ({
  id,
  type,
  placeholder,
  value,
  onValueChanged,
  options,
  rows,
}) => {
  if (type === "Text") {
    return (
      <div className="py-3">
        <input
          className="bg-gray-900 w-full text-white focus:ring-blue-500 focus:border-blue-500 cursor-text"
          id={id}
          type="text"
          placeholder={placeholder || ""}
          value={value || ""}
          onChange={(event) =>
            onValueChanged ? onValueChanged(event.target.value) : {}
          }
        />
      </div>
    );
  }
  if (type === "Multiline") {
    return (
      <div className="py-3">
        <textarea
          rows={rows || 4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id={id}
          placeholder={placeholder || ""}
          value={value || ""}
          onChange={(event) =>
            onValueChanged ? onValueChanged(event.target.value) : {}
          }
        />
      </div>
    );
  }
  if (type === "Select") {
    return (
      <div className="py-3 text-white">
        <select
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) =>
            onValueChanged ? onValueChanged(event.target.value) : {}
          }
          value={value}
        >
          {options?.map((option) => {
            return <option value={option.value}>{option.name}</option>;
          })}
        </select>
      </div>
    );
  }

  return null;
};
