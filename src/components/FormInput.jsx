import React from "react";

function FormInput({ label, name, type, defaultValue, className, ...props }) {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${className}`}
      />
    </div>
  );
}

export default FormInput;
