import React from "react";

export function InputField({
  name,
  onChange,
  value,
  className,
  placeholder,
  type,
  error
}) {
  return(
    <>
      <input 
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        placeholder={placeholder}
        type={type}
      />
      <div style={{ color: "red" }}>{error}</div>
    </>
  )
}