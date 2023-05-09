import React from 'react'



/*
  In React, maps are used for traversing or displaying the list 
  of similar objects, The map() method is a standard JS function 
  and not a React features that could be called on an array. A new array is 
  made using map(), and function is called on each element of the array


  Keys help react indentify which items have changed, are added or removed, 
  Keys should be given to element inside the array to give the elements a 
  stable identity. A key is a special strinf attribute you need to include 
  when creating list of elements

  A key can be a string or number(id, for example), Don't use indexes as keys


*/
function Numbers() {
    const numbers = [349, 569, 9746, 722, 7422, 6432, 4323, 333];
  return (
    <ul>
    {numbers.map(number => (
      <li key={number}>{number}</li>
    ))}
  </ul>
  )
}

export default Numbers