import React, { useState } from "react";

const TextInput = ({
  value,
  onChange,
  required,
  className,
  error,
  errorText,
  isDisabled,
  label,
  onBlur,
  placeholder,
  type,
  name,
  id,
  textarea,
}: {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  className?: string;
  error?: boolean;
  errorText?: string;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isDisabled?: boolean;
  name?: string;
  id?: string;
  textarea?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col gap-y-2">
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="ml-1">*</span>}
        </label>
      )}
      {textarea ? (
        <textarea
          // type={type || "text"}
          name={name || ""}
          id={id || ""}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className={`cursor-text pl-4 pr-1 py-2 mt-1 block w-full shadow-sm sm:text-sm outline-none border ${
            error && isFocused
              ? "!border-red-500"
              : isFocused && !error
              ? "!border-wd-green"
              : "border-gray-300"
          } ${className || ""}`}
          disabled={isDisabled}
        />
      ) : (
        <input
          type={type || "text"}
          name={name || ""}
          id={id || ""}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className={`cursor-text pl-4 pr-1 py-2 mt-1 block w-full shadow-sm sm:text-sm outline-none border ${
            error && isFocused
              ? "!border-red-500"
              : isFocused && !error
              ? "!border-wd-green"
              : "border-gray-300"
          } ${className || ""}`}
          disabled={isDisabled}
        />
      )}
      {error && errorText && isFocused && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default TextInput;
