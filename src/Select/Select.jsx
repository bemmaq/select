import React, { useState } from 'react'

const Select = () => {
    const [value, setValue] = useState("");
    const options = [
        { label: "Русский", value: 1 },
        { label: "English", value: 2 },
        { label: "German", value: 3 },
      ];

      function handleChange(e) {
        setValue(e.target.value);
      }
  return (
    <div>
    <select value={value} onChange={handleChange} style={{ border: "none" }}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  
  </div>
  )
}

export default Select