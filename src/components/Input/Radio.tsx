import React from "react";

const Radio = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label
        htmlFor="push_everything"
        className="ml-3 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
