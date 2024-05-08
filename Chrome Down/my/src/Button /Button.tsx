import React, { useState } from 'react';

const Button = ({ setUp }: { setUp: (value: boolean) => void }) => {
  const handleClick = () => {
    setUp((prevUp) => !prevUp); // Toggle the state

  };

  return (
    <div>
      <button onClick={handleClick}>Click UP</button>
    </div>
  );
};

export default Button;
