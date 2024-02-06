import React from 'react'

function FormSelect({label, name, list, defaultValue, className, ...props}) {
  return (
    <div className='form-control'>
        <label htmlFor={name} className="label">
            <span className="label-text capitalize">{label}</span>
        </label>
        <select name={name} id={name} defaultValue={defaultValue} className={`select select-bordered ${className}`}>
            {list.map((item)=>(
                <option value={item} key={item}>{item}</option>
            ))}
        </select>
    </div>
  )
}

export default FormSelect