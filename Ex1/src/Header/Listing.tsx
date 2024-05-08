import React from "react";

function ListExample() {
  // Sample list of items
  const items = ["Apple", "Banana", "Orange", "Grapes"];

  return (
    <div className="pl-5">
      <h1>List Example</h1>
      <ol >
        {/* Mapping through the list and rendering each item */}
        {items.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ol>
    </div>
  );
}

export default ListExample;
