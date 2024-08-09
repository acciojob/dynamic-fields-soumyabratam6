import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
  // Initial state with one field (name and age)
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  // Handle change in input values
  const handleChangeInput = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  // Handle adding a new field
  const handleAddFields = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  // Handle removing a field
  const handleRemoveFields = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="field-group">
          <input
            type="text"
            name="name"
            value={field.name}
            onChange={(event) => handleChangeInput(index, event)}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={field.age}
            onChange={(event) => handleChangeInput(index, event)}
            placeholder="Age"
          />
          <button type="button" onClick={() => handleRemoveFields(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddFields}>
        Add More..
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;

