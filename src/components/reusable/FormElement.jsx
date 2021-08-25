import React from 'react';

function FormElement({
  type,
  name,
  id,
  value,
  className,
  placeholder,
  onChange,
  onClick,
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default FormElement;
