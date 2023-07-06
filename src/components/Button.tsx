"use client";
import React from "react";

const Button = ({
  onClick,
  children,
  style = {
    backgroundColor: "white",
    color: "black",
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
  borderColor,
  disabledStyle = {
    backgroundColor: "gray",
    color: "white",
    border: "1px solid gray",
    cursor: "not-allowed",
  },
  loadingStyle = {
    backgroundColor: "white",
    color: "black",
    border: borderColor ? `1px solid ${borderColor}` : "1px solid black",
    cursor: "wait",
  },
  loadingText = "Loading...",
  className,
  ...props
}: {
  onClick?: () => void;
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
  className?: string;
  [key: string]: any;
}) => {
  return (
    <button
      className={`px-3 py-2 ${className || ""}`}
      onClick={onClick ? onClick : () => {}}
      style={{
        ...style,
        ...(borderColor && { borderColor }),
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
