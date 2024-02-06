import React from "react";

function FormCheckbox({ label, name, defaultValue, className, ...props }) {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-error`}
      />
    </div>
  );
}

export default FormCheckbox;
