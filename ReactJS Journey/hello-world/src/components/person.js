import React from 'react';

function person(props) {
  const { person } = props; // Destructure the 'person' prop
  return (
    <div>
      <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
    </div>
  );
}

export default person;
