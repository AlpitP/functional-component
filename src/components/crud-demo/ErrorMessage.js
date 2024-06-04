import React from "react";

const ErrorMessage = ({ isError, message }) => {
  return (
    isError && (
      <span style={{ margin: 0, padding: 0, color: "red", fontSize: 12 }}>
        {message}
      </span>
    )
  );
};

export default ErrorMessage;
