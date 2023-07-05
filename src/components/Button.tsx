"use client";
import React from "react";

const Button = ({
  onClick,
  children,
  style = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  disabled = false,
  loading = false,
  hoverColor = "black",
  hoverBackgroundColor = "white",
  hoverBorder = "1px solid black",
  hoverStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverColor,
    border: hoverBorder,
  },
  disabledStyle = {
    backgroundColor: "gray",
    color: "white",
    border: "1px solid gray",
    cursor: "not-allowed",
  },
  loadingStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    cursor: "wait",
  },
  loadingText = "Loading...",
  ...props
}: {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  hoverColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverBorder?: string;
  hoverStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
  loadingStyle?: React.CSSProperties;
  loadingText?: string;
  [key: string]: any;
}) => {
  return (
    <button
      className="px-3 py-2"
      onClick={onClick}
      style={{
        ...style,
        ...(disabled && disabledStyle),
        ...(loading && loadingStyle),
      }}
      {...props}
    >
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
