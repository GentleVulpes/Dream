import React from "react";

type TextAreaProps = React.ComponentProps<"textarea"> & {
  id: string;
  label: string;
};

const TextArea = ({ id, label, ...props }: TextAreaProps) => {
  return (
    <div className="flex flex-col">
      <label
        className="title-label my-4"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className="bg-main-100 shadow-box-sm rounded-sm"
        name={id}
        id={id}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
