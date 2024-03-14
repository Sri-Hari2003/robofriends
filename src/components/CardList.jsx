import { robots } from './details/robots'; // Importing the robots array from its source file
import Card from './cards.jsx'; // Importing the Card component
import React from 'react';

// Assuming this component is named CardList
function CardList() {
  return (
    <div>
      {robots.map((user, i) => (
        <Card key={i} id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default CardList; // Exporting the CardList component