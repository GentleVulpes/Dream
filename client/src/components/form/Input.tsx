import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        className="title-label my-4"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="bg-main-100 shadow-box-sm rounded-sm"
        id={id}
        name={id}
        {...props}
      />
    </div>
  );
};

export default Input;
