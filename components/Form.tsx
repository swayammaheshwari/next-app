"use client"

import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      // Send the name to the backend
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        console.log('Name submitted successfully');
        // Reset the form
        setName('');
      } else {
        console.error('Failed to submit name');
      }
    } catch (error) {
      console.error('Error submitting name:', error);
    }
  };

  const handleChange = (e:any) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
