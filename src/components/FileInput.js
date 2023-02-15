import React from 'react';

function FileInput({ name, onChange }) {
  const handleChange = e => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
